const connection = require("../config/db")

const getSecciones = async (req, res) => {
    try{
        const cuadrantes = await connection.query('SELECT * FROM seccion');
        if (cuadrantes.rows.length === 0) {
            res.status(200).json({
                msg: "No hay seccion"
            })
        }
        res.status(200).json({ cuadrantes: cuadrantes.rows });
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