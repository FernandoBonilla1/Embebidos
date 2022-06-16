const { Router } = require('express');
const router = Router();

//Rutas designadas a los estacionamientos
const {getEstacionamientos} = require("../controllers/controllers.estacionamientos")
router.get("/estacionamientos", getEstacionamientos)
//Rutas designadas a las secciones
const {getSecciones} = require("../controllers/controllers.secciones")
router.get("/secciones", getSecciones)
//Rutas designadas a los cuadrantes
const {getCuadrantes} = require("../controllers/controllers.cuadrantes")
router.get("/cuadrantes", getCuadrantes)


module.exports = router;