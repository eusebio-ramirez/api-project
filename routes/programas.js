const express = require("express");
const router = express.Router();

const programas = [
    {
        "acuerdo": "Alimentación para el Pueblo",
        "documentos": [
                {
                   "nombre" : "Alimentación Escolar Modalidad Caliente",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Alimentacion_Escolar_Modalidad_Caliente.pdf"
                },
                {
                   "nombre" : "Alimentación Escolar Modalidad Frío",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Conv._Lic_Estatal.pdf"
                },
                {
                   "nombre" : "Atención Alimentaria a Grupos Prioritarios, Adultos Mayores",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Atencion_Alimentaria_a_Grupos_Prioritarios_Adultos_Mayores.pdf"
                },
                {
                   "nombre" : "Atención Alimentaria a Grupos Prioritarios, Personas con Discapacidad",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Atencion_Alimentaria_a_Grupos_Prioritarios_Personas_con_Discapacidad.pdf"
                },
                {
                   "nombre" : "Atención Alimentaria a Personas en Situación de Emergencia o Desastre",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Atencion_Alimentaria_a_Personas_en_Situacion_de_Emergencia_o_Desastre.pdf"
                },
                {
                   "nombre" : "Atención Alimentaria en los Primeros 1000 días de Vida",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Atencion_Alimentaria_en_los_Primeros_1000_dias_de_Vida.pdf"
                },
                {
                   "nombre" : "Espacios de Alimentación, Encuentro y Desarrollo",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Espacios_de_Alimentacion_Encuentro_y_Desarrollo.pdf"
                },
                {
                   "nombre" : "Orientación y Educación Alimentaria",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Orientacion_y_Educacion_alimentaria.pdf"
                }

        ]
    },
    {
        "acuerdo": "Formación para Todas y Todos",
        "documentos": [
                {
                   "nombre" : "Casa de la Mujer Hidalguense",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Casa_de_la_Mujer_Hidalguense.pdf"
                },
                {
                   "nombre" : "Centros de Atención Infantil (CAI)",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Centros_de_Atencion_Infantil(CAI).pdf"
                },
                {
                   "nombre" : "Centro de Desarrollo Comunitario Urbano (CDCU)",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Centro_de_Desarrollo_Comunitario_Urbano_(CDCU).pdf"
                }

        ]
    },
    {
        "acuerdo": "La Salud es Primero",
        "documentos": [
                {
                   "nombre" : "Atención Médica y Hospitalaria Pediátrica en Hospital del Niño DIF",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Atencion_Medica_y_Hospitalaria_Pediatrica_en_Hospital_del_Niño_DIF.pdf"
                },
                {
                   "nombre" : "Atención Psicológica",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Atencion_Psicologica.pdf"
                },
                {
                   "nombre" : "Apoyo y Bienestar",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Apoyo_y_Bienestar.pdf"
                },
                {
                   "nombre" : "Centro de Rehabilitación Integral Hidalgo (CRIH)",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Centro_de_Rehabilitacion_Integral_Hidalgo_(CRIH).pdf"
                },
                {
                   "nombre" : "Jornadas Médicas de Subespecialidad",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Jornadas_Medicas_de_Subespecialidad.pdf"
                }

        ]
    },
    {
        "acuerdo": "Cercanía con Grupos Prioritarios",
        "documentos": [
                {
                   "nombre" : "Atención a Personas en Condiciones de Emergencia",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Atencion_a_Personas_en_Condiciones_de_Emergencia.pdf"
                },
                {
                   "nombre" : "Promoción y Envejecimiento Saludable",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Promocion_y_Envejecimiento_Saludable.pdf"
                },
                {
                   "nombre" : "Programa de Salud y Bienestar Comunitario",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Salud_y_Bienestar_Comunitario.pdf"
                },
                {
                   "nombre" : "Albergue del Hospital del Niño DIF",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Albergue_del_Hospital_del_Niño_DIF.pdf"
                },
                {
                   "nombre" : "Albergue para Niñas y Niños con Cáncer y Enfermedades Crónico Degenerativas",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Conv._Lic_Estatal.pdf"
                },
                {
                   "nombre" : "Albergue Revolución",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Albergue_Revolucion.pdf"
                },
                {
                   "nombre" : "Ayudas Técnicas",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Ayudas_Tecnicas.pdf"
                },
                {
                   "nombre" : "Casa Cuna",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Casa_Cuna.pdf"
                },
                {
                   "nombre" : "Casa de Día Centro de Expresión Adulto Mayor",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Casa_de_la_Tercera_Edad.pdf"
                },
                {
                   "nombre" : "Casa de Día María Elena Ramirez",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Casa_de_Descanso.pdf"
                },
                {
                   "nombre" : "Casa de la Niña",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Casa_de_la_Niña.pdf"
                },
                {
                   "nombre" : "Casa de las Adolescentes",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Conv._Lic_Estatal.pdf"
                },
                {
                   "nombre" : "Casa de las y los Adolescentes",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Casa_Las_Y_Los_Adolescentes.pdf"
                },
                {
                   "nombre" : "Casa del Niño",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Casa_del_Niño.pdf"
                },
                {
                   "nombre" : "Desarrollo de Habilidades en Niñas, Niños y Adolescentes",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Desarrollo_de_Habilidades_en_Niñas_Niños_y_Adolescentes.pdf"
                },
                {
                   "nombre" : "DIF Contigo",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/DIF_Contigo.pdf"
                },
                {
                   "nombre" : "Fortalecimiento para la Atención de Niñas, Niños y Adolescentes Migrantes",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Conv._Lic_Estatal.pdf"
                },
                {
                   "nombre" : "Hacia una Vida Mejor",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Hacia_una_vida_mejor.pdf"
                },
                {
                   "nombre" : "Representación Especial a Niñas, Niños y Adolescentes",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Representacion_Especial_a_NNA.pdf"
                },
                {
                   "nombre" : "Taller de Órtesis y Prótesis",
                   "linkPDF" : "http://dif.hidalgo.gob.mx/pdf/programasDIF/Taller_de_Ortesis_y_Protesis.pdf"
                }

        ]
    }
]

router.get("/", (req, res) => {
	res.json(programas);
  });
  
  module.exports = router;