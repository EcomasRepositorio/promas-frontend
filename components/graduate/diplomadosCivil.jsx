"use client";
import Curso from "./diplomadosAccordion";

const DiploCivil = () => {
  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      area: "INGENIERÍA CIVIL",
      titulo: "ASISTENTE TÉCNICO EN OBRAS",
      imagen: "/DIPLOMADOS/obras.webp",
      fechaInicio: "11/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Diplomado dirigido a bachilleres, titulados y profesionales de las carreras de ingeniería civil, industriales, sanitarios, arquitectos y ramas afines.",
      modulos: [
        "Planificación y programación de obras",
        "Control de obras",
        "Metrados en edificaciones",
        "Cuaderno de obra físico y digital",
        "Costos y Presupuestos con S10",
        "Valorización de obras",
        "Liquidación de obras",
        "Formulación y planificación de proyectos con MS Project",
        "Análisis y diseño de instituciones educativas",
        "Seguridad, salud ocupacional y medio ambiente en obras públicas",
        "Expediente técnico en obras",
        "Régimen laboral en construcción civil",
      ],
    },
    {
      area: "INGENIERÍA CIVIL",
      titulo: "INGENIERÍA VIAL",
      imagen: "/DIPLOMADOS/vial.webp",
      fechaInicio: "22/06/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Diplomado dirigido a ingenieros civiles, topógrafos, arquitectos residentes y supervisores de obras, bachilleres, Gerentes, administradores de proyectos de la construcción, jefes de área y profesionales del sector público y privado relacionados con proyectos viales.",
      modulos: [
        "Geología – Geotecnia en obras viales",
        "Suelos y pavimentos",
        "Hidrología e hidráulica",
        "Estructuras en carreteras - puentes",
        "Metrados, costos y presupuesto – cronograma en obras viales",
        "Arqueología en proyectos viales",
        "Estudio medio ambiental – derecho de vía – interferencias",
        "Diseño, construcción y mantenimiento de Túneles",
        "Integración de proyectos de infraestructura vial",
        "Tráfico y carga",
        "Topografía, diseño geométrico, señalización y seguridad vial",
      ],
    },
    {
      area: "INGENIERÍA CIVIL",
      titulo: "INGENIERÍA DE PUENTES",
      imagen: "/DIPLOMADOS/puentes.webp",
      fechaInicio: "22/09/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Diplomado dirigido a bachilleres, Gerentes y administradores de proyectos y jefes de área. Ingenieros civiles, ingenieros estructurales, arquitectos residentes y supervisores de obras. Profesionales del sector público y privado relacionados con proyectos viales.",
      modulos: [
        "Diseño sísmico en puentes AASHTO-LRFD",
        "Mantenimiento y conservacíon de puentes",
        "Inspección, evaluación de puentes bajo la metodología SCAP",
        "Diseño de puentes, pontones",
        "Estudios de Hidrología e hidráulica en puentes",
        "Estudios Geológicos y geotécnicos en puentes",
        "Diseño y modalamiento de puentes con SAP 2000",
        "Diseño y modelamiento de puentes con CSi BRIDGE",
        "Modelamiento y análisis estructural de puentes",
      ],
    },
    {
      area: "INGENIERÍA CIVIL",
      titulo: "RESIDENCIA Y SUPERVISIÓN DE OBRAS",
      imagen: "/DIPLOMADOS/supervicion_obras.webp",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Diplomado dirigido a gerente de proyectos relacionados a construcción, supervisor de obras, consultores en servicios de ingeniería, ingenieros, arquitectos, topógrafos, bachilleres de la especialidad de ingeniería civil, y/o especialistas afines. Profesionales del sector público y privado relacionados con proyectos de obras civiles. ",
      modulos: [
        "Planeamiento Y Programación de Obras",
        "Informes de obra",
        "Control técnico y calidad en obras",
        "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
        "Recepción - liquidación de obras y medios de controversia",
        "Expediente técnico como herramienta para la ejecución y supervisión de obra",
        "Valorización y liquidación de obras por administración directa",
        "Plan de gestión de seguridad y salud en obra",
        "Contratación y ejecución de obras",
        "Preliminares para inicio de obra",
        "Metrados y valorizaciones de obra",
      ],
    },
    /*{
      area: "INGENIERÍA CIVIL",
      titulo: "Residencia y supervisón de obras",
      imagen: "/image/residencia.jpg",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas academicas (26 creditos)",
      descripcion:
        "Gerente de proyectos relacionados a construcción, supervisor de obras, consultores en servicios de ingeniería, ingenieros, arquitectos, topógrafos, bachilleres de la especialidad de ingeniería civil, y/o especialistas afines. Profesionales del sector público y privado relacionados con proyectos de obras civiles.  ",
      modulos: [
        "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
        "Recepción - liquidación de obras y medios de solución de controversia",
        "Expediente técnico como herramienta para la ejecución y supervisión de obra",
        "Valorización y liquidación de obras administración directa",
        "Plan de gestión de seguridad y salud en obra",
        "Contratación y ejecución de obras",
        "Preliminares para inicio de obra",
        "Metrados y valorizaciones de obra",
        "Planeamiento y programación de obras",
        "Informes de obra",
        "Control técnico y calidad en obras",
      ],
    },*/
  ];

  return (
    <div>
      {cursosData.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}
    </div>
  );
};

export default DiploCivil;
