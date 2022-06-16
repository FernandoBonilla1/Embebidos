const req = require("express/lib/request");
const res = require("express/lib/response");
const connection = require("../config/db")

const getEstacionamientos = async (req, res) => {
    try{
        const estacionamiento = await connection.query('SELECT * FROM estacionamiento');
        if (estacionamiento.rows.length === 0) {
            res.status(200).json({
                msg: "No hay estacionamiento"
            })
        }
        res.status(200).json({ estacionamientos: estacionamiento.rows });
    } catch(error){
        res.status(500).json({
            msg: "No se pudo acceder a la tabla estacionamiento",
            error
        })
    }
}

const updateEstacionamiento = async (req, res) =>{
    try{
        const {distancia} = req.body
        if(distancia < 100){

        }else{

        }

    } catch (error){

    }
}

module.exports = {
    getEstacionamientos
}