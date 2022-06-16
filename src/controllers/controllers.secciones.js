const connection = require("../config/db")

const getSecciones = async (req, res) => {
    try{
        const secciones = await connection.query('SELECT * FROM seccion');
        if (secciones.rows.length === 0) {
            res.status(200).json({
                msg: "No hay seccion"
            })
        }
        res.status(200).json({secciones.rows });
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla seccion",
            error
        })
    }
}

module.exports = {
    getSecciones
}