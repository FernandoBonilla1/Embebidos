const req = require("express/lib/request");
const res = require("express/lib/response");
const connection = require("../config/db")

const getEstacionamientos = async (req, res) => {
    try{
        const estacionamiento = await connection.query('SELECT * FROM estacionamiento');
        if (estacionamiento.rows.length === 0) {
            res.status(200).json({
                msg: "No hay estacionamientos"
            })
        }
        res.status(200).json(estacionamiento.rows);
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

const getdisponibleCuadrante = async (req, res) => {
    try{
        const estacionamiento = await connection.query('select idcuadrante, count(*) as disponibles from estacionamiento where disponible = true group by idcuadrante order by idcuadrante asc ');
        if (estacionamiento.rows.length === 0) {
            res.status(200).json({
                msg: "No hay estacionamientos"
            })
        }
        res.status(200).json(estacionamiento.rows);
    }catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

const updateEstacionamiento = async (req, res) =>{
    try{
        const {distancia, idEstacionamiento} = req.body
        if(distancia == undefined || idEstacionamiento == undefined){
            res.status(401).json({
                msg: "Debe enviar el campo distancia e id estacionamiento"
            })
        }
        if(distancia < 100){
            const estacionamiento = await connection.query("UPDATE estacionamiento SET disponible = False Where id = $1",[idEstacionamiento])
            res.status(200).json({
                msg: `Se actualizo el estado del estacionamiento con id: ${idEstacionamiento}`
            })
        }else{
            const estacionamiento = await connection.query("UPDATE estacionamiento SET disponible = True Where id = $1",[idEstacionamiento])
            res.status(200).json({
                msg: `Se actualizo el estado del estacionamiento con id: ${idEstacionamiento}`
            })
        }

    } catch (error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

module.exports = {
    getEstacionamientos,
    updateEstacionamiento,
    getdisponibleCuadrante
}