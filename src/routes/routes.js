const { Router } = require('express');
const router = Router();

//Rutas designadas a los estacionamientos
const {getEstacionamientos,updateEstacionamiento, getdisponibleCuadrante_1_2,getdisponibleCuadrante,getOcupadoSeccion} = require("../controllers/controllers.estacionamientos")
router.get("/estacionamientos", getEstacionamientos)
router.post("/updateestacionamiento", updateEstacionamiento)
router.get("/disponiblecuadrante_1_2", getdisponibleCuadrante_1_2)
router.get("/disponiblecuadrante", getdisponibleCuadrante)
router.get("/ocupadosseccion",getOcupadoSeccion);
//Rutas designadas a las secciones
const {getSecciones} = require("../controllers/controllers.secciones")
router.get("/secciones", getSecciones)
//Rutas designadas a los cuadrantes
const {getCuadrantes} = require("../controllers/controllers.cuadrantes")
router.get("/cuadrantes", getCuadrantes)

//Rutas designadas para reportes
const {getReportes, getReportesTrue} = require("../controllers/controllers.reportes")
router.get("/reportes",getReportes)
router.get("/reportestrue",getReportesTrue);

module.exports = router;