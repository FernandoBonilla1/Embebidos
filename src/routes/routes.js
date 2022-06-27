const { Router } = require('express');
const router = Router();

//Rutas designadas a los estacionamientos
const {getEstacionamientos,updateEstacionamiento, getdisponibleCuadrante_1_2,getdisponibleCuadrante} = require("../controllers/controllers.estacionamientos")
router.get("/estacionamientos", getEstacionamientos)
router.post("/updateestacionamiento", updateEstacionamiento)
router.get("/disponiblecuadrante_1_2", getdisponibleCuadrante_1_2)
router.get("/disponiblecuadrante", getdisponibleCuadrante)
//Rutas designadas a las secciones
const {getSecciones} = require("../controllers/controllers.secciones")
router.get("/secciones", getSecciones)
//Rutas designadas a los cuadrantes
const {getCuadrantes} = require("../controllers/controllers.cuadrantes")
router.get("/cuadrantes", getCuadrantes)

//Rutas designadas para reportes
const {getReportes} = require("../controllers/controllers.reportes")
router.get("/reportes",getReportes)

module.exports = router;