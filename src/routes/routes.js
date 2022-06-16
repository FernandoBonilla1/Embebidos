const { Router } = require('express');
const router = Router();

//Rutas designadas a los estacionamientos

//Rutas designadas a las secciones

//Rutas designadas a los cuadrantes
const {getCuadrantes} = require("../controllers/controllers.cuadrantes")
router.get("/cuadrantes", getCuadrantes)


module.exports = router;