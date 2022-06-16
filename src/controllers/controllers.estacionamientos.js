const connection = require("../config/db")

const getEstacionamientos = async (req, res) => {
    try{
        const cuadrantes = await connection.query('SELECT * FROM estacionamiento');
        if (cuadrantes.rows.length === 0) {
            res.status(200).json({
                msg: "No hay estacionamiento"
            })
        }
        res.status(200).json({ cuadrantes: cuadrantes.rows });
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

module.exports = {
    getEstacionamientos
}