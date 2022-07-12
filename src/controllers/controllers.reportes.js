const connection = require("../config/db")
const getReportes = async (req, res) => {
    try{
        const reporte = await connection.query('select estacionamiento.idestacionamiento as idestacionamiento, estacionamiento.idcuadrante as cuadrante, seccion.name as seccion, seccion.id as idseccion, registro.fecha as fecha, registro.hora as hora, registro.ocupado as ocupado from estacionamiento inner join registro on (registro.idestacionamiento = estacionamiento.idestacionamiento and registro.idcuadrante = estacionamiento.idcuadrante) inner join cuadrante on (cuadrante.id = registro.idcuadrante) inner join seccion on (seccion.id = cuadrante.id_seccion)');
        if (reporte.rows.length === 0) {
            res.status(200).json({
                msg: "No hay registros"
            })
        }
        res.status(200).json(reporte.rows);
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla registro",
            error
        })
    }
}


const getReportesTrue = async (req, res) => {
    try{
        const reporte = await connection.query('select estacionamiento.idestacionamiento as idestacionamiento, estacionamiento.idcuadrante as cuadrante, seccion.name as seccion, seccion.id as idseccion, registro.fecha as fecha, registro.hora as hora, registro.ocupado as ocupado from estacionamiento inner join registro on (registro.idestacionamiento = estacionamiento.idestacionamiento and registro.idcuadrante = estacionamiento.idcuadrante) inner join cuadrante on (cuadrante.id = registro.idcuadrante) inner join seccion on (seccion.id = cuadrante.id_seccion) where registro.ocupado = true');
        if (reporte.rows.length === 0) {
            res.status(200).json({
                msg: "No hay registros"
            })
        }
        res.status(200).json(reporte.rows);
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla registro",
            error
        })
    }
}


module.exports = {
    getReportes,
	getReportesTrue
}