const connection = require("../config/db")
const getReportes = async (req, res) => {
    try{
        const reporte = await connection.query('SELECT * FROM registro');
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
    getReportes
}