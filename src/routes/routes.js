const { Router } = require('express');
const router = Router();

//Rutas designadas a los estacionamientos
const {getEstacionamientos, updateEstacionamiento} = require("../controllers/controllers.estacionamientos")
router.get("/estacionamientos", getEstacionamientos)
router.post("/updateestacionamiento", updateEstacionamiento)
//Rutas designadas a las secciones
const {getSecciones} = require("../controllers/controllers.secciones")
router.get("/secciones", getSecciones)
//Rutas designadas a los cuadrantes
const {getCuadrantes} = require("../controllers/controllers.cuadrantes")
router.get("/cuadrantes", getCuadrantes)


module.exports = router;