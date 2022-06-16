const connection = require("../config/db")

const getCuadrantes = async (req, res) => {
    try{
        const cuadrantes = await connection.query('SELECT * FROM cuadrante');
        if (cuadrantes.rows.length === 0) {
            res.status(200).json({
                msg: "No hay cuadrantes"
            })
        }
        res.status(200).json({cuadrantes.rows });
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla cuadrantes",
            error
        })
    }
}

module.exports = {
    getCuadrantes
}