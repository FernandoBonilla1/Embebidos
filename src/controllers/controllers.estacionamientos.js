const req = require("express/lib/request");
const res = require("express/lib/response");
const connection = require("../config/db")

const getEstacionamientos = async (req, res) => {
    try {
        const estacionamiento = await connection.query('SELECT * FROM estacionamiento');
        if (estacionamiento.rows.length === 0) {
            res.status(200).json({
                msg: "No hay estacionamientos"
            })
        }
        res.status(200).json(estacionamiento.rows);
    } catch (error) {
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

const getOcupadoSeccion = async (req,res) => {
    try{
        const ocupados = await connection.query('Select seccion.id as id_seccion, seccion.name as nombre, count(*) as ocupado from estacionamiento  inner join cuadrante on (cuadrante.id = estacionamiento.idcuadrante)  inner join seccion on (cuadrante.id_seccion = seccion.id)  where estacionamiento.ocupado = true Group By (seccion.id, seccion.name) ORDER BY seccion.name asc')
        if (ocupados.rows.length === 0) {
            res.status(200).json({
                msg: "No hay estacionamientos"
            })
        }
        res.status(200).json(ocupados.rows);
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

const getdisponibleCuadrante = async (req, res) => {
    try {
        const estacionamiento = await connection.query('Select estacionamiento.idcuadrante as cuadrante, seccion.name as nombre, count(*) as disponible from estacionamiento inner join cuadrante on (cuadrante.id = estacionamiento.idcuadrante) inner join seccion on (cuadrante.id_seccion = seccion.id) where estacionamiento.ocupado = false Group By (idcuadrante,seccion.name) ORDER BY cuadrante asc');
        if (estacionamiento.rows.length === 0) {
            res.status(200).json({
                msg: "No hay estacionamientos"
            })
        }
        res.status(200).json(estacionamiento.rows);
    } catch (error) {
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

const getdisponibleCuadrante_1_2 = async (req, res) => {
    try {
        const estacionamiento = await connection.query('select estacionamiento.idcuadrante as cuadrante, count(*) as disponibles  from estacionamiento inner join cuadrante on (estacionamiento.idcuadrante = cuadrante.id) where ocupado = false group by idcuadrante order by idcuadrante asc');
        if (estacionamiento.rows.length === 0) {
            res.status(200).send("No hay estacionamientos")
        }
        const cuadrante1 = estacionamiento.rows[0].disponibles;
        const cuadrante2 = estacionamiento.rows[1].disponibles;
        res.send(`${cuadrante1},${cuadrante2}`);
    } catch (error) {
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

const updateEstacionamiento = async (req, res) => {
    try {
        const { text } = req.body;
        const divisiones = text.split(",");
        const cuadrante = divisiones[0];
        const estacionamiento = divisiones[1];
        const ocupado = divisiones[2];
        const mybool = (ocupado === 'true')
        const date = Date.now();
        const hoy = new Date(date);
        const fecha_actual = hoy.toISOString().slice(0,10);
        const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
        const estacionamientos = await connection.query("UPDATE estacionamiento SET ocupado = $1 Where idcuadrante = $2 and idestacionamiento = $3", [mybool, cuadrante, estacionamiento]);
        const registros = await connection.query("INSERT INTO registro(idcuadrante,idestacionamiento,fecha,hora,ocupado) VALUES($1,$2,$3,$4,$5)",[cuadrante,estacionamiento,fecha_actual,hora,mybool]);
        res.status(200).json({
            msg: "Se logro actualizar el estacionamiento"
        })
    } catch (error) {
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

module.exports = {
    getEstacionamientos,
    updateEstacionamiento,
    getdisponibleCuadrante_1_2,
    getdisponibleCuadrante,
    getOcupadoSeccion
}