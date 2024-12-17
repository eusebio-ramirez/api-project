const express = require("express");
const router = express.Router();

const menus = [
  {
    nombre: "Agenda del Titular",
    link: "/Agenda",
  },
  {
    nombre: "Informe de Actividades",
    link: "/InformeActividades",
  },
  {
    nombre: "Transparencia",
    link: "/Rubros",
  },
  {
    nombre: "Servicios",
    link: "/Servicios",
  },
  {
    nombre: "Evaluación y Monitoreo",
    link: "/Evaluacion",
  },
  {
    nombre: "Información Institucional",
    link: "/InformacionInstitucional",
  },
];

router.get("/", (req, res) => {
  res.json(menus);
});

module.exports = router;
