const express = require("express");
const router = express.Router();

const servicios = [
  {
    id:1,
    url: "http://ruts.hidalgo.gob.mx/ver/1478",
    nombre: "Albergue Revolución",
    descripcion:
      "Otorgar servicio de hospedaje y alimentación a población que tengan pacientes con algún tratamiento médico en algún hospital.",
  },
  {
    id:2,
    url: "http://ruts.hidalgo.gob.mx/ver/616",
    nombre: "Albergue del Hospital del Niño DIF Hidalgo",
    descripcion:
      "Atención de hospedaje y alimentación para familiares acompañantes y pacientes del Hospital del Niño DIF Hidalgo.",
  },
  {
    id:3,
    url: "http://ruts.hidalgo.gob.mx/ver/484",
    nombre: "Apoyo con Estudios de gabinete y laboratorio y medicamentos",
    descripcion:
      "Disminuir los gastos extraordinarios en la población vulnerable con situaciones asociadas a la salud.",
  },
  {
    id:4,
    url: "https://ruts.hidalgo.gob.mx/ver/8322",
    nombre: "Atención Alimentaria a Grupos Prioritarios, Adultos Mayores",
    descripcion:
      "Mejorar el estado nutricional de hombres y mujeres de 60 años o más.",
  },
  {
    id:5,
    url: "https://ruts.hidalgo.gob.mx/ver/8328",
    nombre:
      "Atención Alimentaria a Personas en Situación de Emergencia o Desastre",
    descripcion:
      "Contribuir en el acceso a la alimentación para la población del estado de Hidalgo, afectada por fenómenos naturales destructivos.",
  },
  {
    id:6,
    url: "https://ruts.hidalgo.gob.mx/ver/8331",
    nombre:
      "Atención Alimentaria a Grupos Prioritarios, Personas con Discapacidad",
    descripcion:
      "Mejora el estado nutricional de personas con discapacidad permanente del estado de Hidalgo.",
  },
  {
    id:7,
    url: "http://ruts.hidalgo.gob.mx/ver/8323",
    nombre: "Atención Alimentaria en los Primeros 1000 días de vida",
    descripcion:
      "Fortalecer el acceso a la alimentación del estado de Hidalgo, mediante la entrega de dotaciones alimentarias con calidad nutricia.",
  },
  {
    id:8,
    url: "http://ruts.hidalgo.gob.mx/ver/494",
    nombre: "Ayudas Técnicas",
    descripcion:
      "Otorgar de manera unilateral, bipartita o tripartita, apoyos a población con discapacidad sea esta temporal o permanente.",
  },
  {
    id:9,
    url: "http://ruts.hidalgo.gob.mx/ver/435",
    nombre: "Caja general del Sistema DIF Hidalgo",
    descripcion:
      "Realizar depósito por concepto de pago de algún derecho, producto o aprovechamiento.",
  },
  {
    id:10,
    url: "http://ruts.hidalgo.gob.mx/ver/440",
    nombre:
      "Capacitar con temas gerontológicos a los enlaces y/o personas que estén al frente de grupos de personas adultas mayores de los diferentes DIF Municipales.",
    descripcion:
      "Adultos mayores permanecen activamente en los aspectos biopsicosocial de su vida.",
  },
  {
    id:11,
    url: "http://ruts.hidalgo.gob.mx/ver/1477",
    nombre: "Casa de la Mujer Hidalguense",
    descripcion:
      "Otorgar educación de Bachillerato Tecnológico y/o de Capacitación para el Trabajo, a mujeres en estado de vulnerabilidad.",
  },
  {
    id:12,
    url: "http://ruts.hidalgo.gob.mx/ver/1509",
    nombre: "Centro de Expresión Juvenil",
    descripcion:
      "Espacio para las y los adolescentes de 12 años a 18 años 11 meses de edad.",
  },
  {
    id:13,
    url: "http://ruts.hidalgo.gob.mx/ver/7426",
    nombre: "Centro Asistencial Casa de la Niña “María Elena Sañudo de Núñez”",
    descripcion:
      "Coadyuvar a fortalecer el desarrollo físico, psicológico y social de niñas y adolescentes de 6 a 17 años 11 meses de edad.",
  },
  {
    id:14,
    url: "http://ruts.hidalgo.gob.mx/ver/7420",
    nombre: "Centro Asistencial Casa del Niño",
    descripcion:
      "Atención Integral exclusivamente a niños y adolescentes que por diversas circunstancias tales como víctimas de abandono, orfandad y maltrato; son separados del Núcleo Familiar.",
  },
  {
    id:15,
    url: "http://ruts.hidalgo.gob.mx/ver/7465",
    nombre: "Centro Asistencial La Casita",
    descripcion:
      "Conocer, valorar y atender a niñas, niños y adolescentes en riesgo, en su problemática familiar, escolar y social",
  },
  {
    id:16,
    url: "http://ruts.hidalgo.gob.mx/ver/7407",
    nombre: "Centro Asistencial Casa Cuna",
    descripcion:
      "Proporcionar albergue y atención integral a niñas y niños que se encuentren en situación de extravío, de abandono total o parcial o que legalmente han sido separados de su familia como una medida precautoria.",
  },
  {
    id:17,
    url: "http://ruts.hidalgo.gob.mx/ver/462",
    nombre: "Centros de Atención Infantil (CAI)",
    descripcion:
      "Contribuir a que mujeres y hombres cuya percepción económica no rebase los 2 salarios mínimos continúen con sus actividades laborales mediante el cuidado, atención y educación formal para sus hijas e hijos en edad de 45 días a 5 años 11 meses en los centros C.A.I o C.A.D.I.",
  },
  {
    id:18,
    url: "http://ruts.hidalgo.gob.mx/ver/470",
    nombre: "Centros de Desarrollo Comunitario Urbanos (CDC)",
    descripcion:
      "Proporcionar cursos de capacitación, a fin de mejorar las habilidades de la población del área metropolitana de Pachuca.",
  },
  {
    id:19,
    url: "http://ruts.hidalgo.gob.mx/ver/476",
    nombre: "Comercialización de prendas no desempeñadas",
    descripcion:
      "Venta de artículos no desempeñados ni refrendados en el tiempo estipulado y abierta al público en general.",
  },
  {
    id:20,
    url: "http://ruts.hidalgo.gob.mx/ver/481",
    nombre:
      "Consulta externa de pediatría y especialidades en el Hospital del Niño DIF Hidalgo",
    descripcion:
      "Atención médica de alta calidad científica y ética a pacientes menores de 18 años.",
  },
  {
    id:21,
    url: "http://ruts.hidalgo.gob.mx/ver/564",
    nombre:
      "Consulta Médica en el Servicio de Urgencias en el Hospital del Niño DIF Hidalgo",
    descripcion:
      "Proporcionar atención médica de alta calidad científica y especializada a los menores de 18 años que asistan al hospital.",
  },
  {
    id:22,
    url: "http://ruts.hidalgo.gob.mx/ver/482",
    nombre: "Credencialización para Personas con Discapacidad Permanente",
    descripcion:
      "Proporcionar una credencial de identidad a las personas con discapacidad que acredite su condición y promueva la obtención de beneficios y servicios.",
  },
  {
    id:23,
    url: "http://ruts.hidalgo.gob.mx/ver/8315",
    nombre: "Alimentación Escolar Modalidad Caliente",
    descripcion:
      "Contribuir al acceso a alimentos nutritivos para el mejoramiento de la nutrición de niñas, niños y adolescentes.",
  },
  {
    id:24,
    url: "http://ruts.hidalgo.gob.mx/ver/8314",
    nombre: "Alimentación Escolar Modalidad Fría",
    descripcion:
      "Contribuir al acceso a alimentos nutritivos para el mejoramiento de la nutrición de niñas y niños.",
  },
  {
    id:25,
    url: "http://ruts.hidalgo.gob.mx/ver/7335",
    nombre: "Entrega de apoyo a población vulnerable",
    descripcion:
      "Contribuir a la solución de la problemática emergente de población vulnerable.",
  },
  {
    id:26,
    url: "http://ruts.hidalgo.gob.mx/ver/489",
    nombre: "Gastos Funerarios",
    descripcion:
      "Disminuir los gastos extraordinarios en la población vulnerable con situaciones asociadas a la salud.",
  },
  {
    id:27,
    url: "http://ruts.hidalgo.gob.mx/ver/483",
    nombre: "Hacia una vida mejor",
    descripcion:
      "Otorgar proyectos productivos a hidalguenses con discapacidad permanente de escasos recursos económicos.",
  },
  {
    id:28,
    url: "http://ruts.hidalgo.gob.mx/ver/490",
    nombre: "Imagenología del Hospital del Niño DIF Hidalgo",
    descripcion:
      "Proporcionar atención del servicio de radiología e imagen a los pacientes del Hospital hasta los 16 años.",
  },
  {
    id:29,
    url: "http://ruts.hidalgo.gob.mx/ver/7349",
    nombre: "Ingreso a Casa de Día “María Elena Ramírez de Lozano”",
    descripcion:
      "Brindar servicio de residencia o servicio de día (tipo guardería).",
  },
  //"url":"http://ruts.hidalgo.gob.mx/ver/7370","nombre":"Ingreso Casa de la Tercera Edad","descripcion":"Realizar trámites correspondientes, así como recopilar documentación personal para ingresar al Centro Asistencial."},*/
  {
    id:30,
    url: "http://ruts.hidalgo.gob.mx/ver/491",
    nombre: "Jornadas Médicas de Subespecialidad",
    descripcion:
      "Población que requiere una cirugía extramuros ambulatoria de tipo general, oftalmológica y plástica.",
  },
  {
    id:31,
    url: "http://ruts.hidalgo.gob.mx/ver/497",
    nombre: "Préstamos Prendarios",
    descripcion:
      "Entrega de dinero en efectivo, mediante la recepción de un bien mueble en garantía.",
  },
  {
    id:32,
    url: "http://ruts.hidalgo.gob.mx/ver/1482",
    nombre: "Proceso y Trámite de Adopción",
    descripcion:
      "Integración de un niño, niña o adolescente a una familia como hija o hijo biológico.",
  },
  {
    id:33,
    url: "http://ruts.hidalgo.gob.mx/ver/1342",
    nombre:
      "Programa de Atención Médica Contra Accidentes para Escolares en el Hospital del Niño DIF Hidalgo",
    descripcion:
      "Atención médica pediátrica en el Hospital del Niño DIF Hidalgo, para alumnos afiliados al programa.",
  },
  {
    id:34,
    url: "http://ruts.hidalgo.gob.mx/ver/499",
    nombre:
      "Registro de Organizaciones de la Sociedad Civil de Asistencia Social",
    descripcion:
      "Registrar a las Organizaciones Civiles de Asistencia Social del Estado de Hidalgo, ante la Junta General de Asistencia.",
  },
  {
    id:35,
    url: "http://ruts.hidalgo.gob.mx/ver/1481",
    nombre:
      "Reporte de violencia o maltrato en contra de Niñas, Niños y Adolescentes",
    descripcion:
      "Procurar la protección y restitución integral de los derechos de la niñez y adolescencia.",
  },
  {
    id:36,
    url: "http://ruts.hidalgo.gob.mx/ver/500",
    nombre: "Servicio de Atención Psicológica",
    descripcion:
      "Otorgar servicios profesionales de atención psicológica dirigidos a la población beneficiaria.",
  },
  {
    id:37,
    url: "http://ruts.hidalgo.gob.mx/ver/502",
    nombre: "Servicio de Estacionamiento Plaza Independencia Reloj Monumental",
    descripcion:
      "Brindar a la ciudadanía en general que requiera de espacios disponibles para estacionamiento de vehículos dentro de la zona centro de la ciudad de Pachuca.",
  },
  {
    id:38,
    url: "http://ruts.hidalgo.gob.mx/ver/533",
    nombre: "Servicio de laboratorio clínico (Hospital del Niño DIF)",
    descripcion:
      "Proporcionar atención del servicio de laboratorio clínico a los pacientes del Hospital hasta los 16 años.",
  },
  {
    id:39,
    url: "http://ruts.hidalgo.gob.mx/ver/5523",
    nombre: "Servicio Funeraria DIF Hidalgo",
    descripcion:
      "Brindar a la población en general servicios funerarios a costos accesibles.",
  },
  {
    id:40,
    url: "http://ruts.hidalgo.gob.mx/ver/554",
    nombre: "Servicio Social",
    descripcion:
      "Obtener carta de terminación al finalizar su Servicio Social y/o Prácticas Profesionales.",
  },
  {
    id:41,
    url: "http://ruts.hidalgo.gob.mx/ver/560",
    nombre: "Taller Laboratorio de Órtesis y Prótesis",
    descripcion:
      "Apoyar a personas que cuenten con discapacidad motriz temporal o permanente con la elaboración de Órtesis y Prótesis.",
  },
  {
    id:42,
    url: "http://ruts.hidalgo.gob.mx/ver/442",
    nombre:
      "Talleres, pláticas y conferencias sobre habilidades de vida para niñas, niños y adolescentes",
    descripcion:
      "Impartir talleres y pláticas preventivas sobre el uso, consumo y abuso de sustancias psicoactivas dirigidas a niñas, niños y adolescentes.",
  },
];

router.get("/", (req, res) => {
	res.json(servicios);
  });
  
  module.exports = router;