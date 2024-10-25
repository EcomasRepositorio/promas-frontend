"use client";
import Curso from "./diplomadosAccordion";

const DiploAmbient = () => {
  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      area: "INGENIERÍA AMBIENTAL",
      titulo: "ESTUDIO DE IMPACTO AMBIENTAL",
      imagen: "/DIPLOMADOS/ambiental.webp",
      fechaInicio: "12/10/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Diplomado dirigido a profesionales del medio ambiente, gestores de proyectos, consultores ambientales, autoridades reguladoras, estudiantes y académicos, profesionales de derecho ambiental, planificadores urbanos, ONGs, empresarios y público en general.",
      modulos: [
        "Elaboración de mapas temáticos con ArcGIS",
        "Participación ciudadana",
        "Supervisión, Fiscalización y auditoría ambiental",
        "Elaboración de informe de EIA",
        "Legislación ambiental",
        "Instrumentos de gestión ambiental",
        "Línea base de estudio de impacto ambiental",
        "Identificación y evaluación de impacto ambiental",
        "Valoración Económica Ambiental",
        "Estrategias de manejo ambiental",
        "Plan de cierre y post cierre de proyectos",
        "Calidad ambiental, evaluación de riesgos y técnicas de remediación ambiental",
      ],
    },
    {
      area: "INGENIERÍA AMBIENTAL",
      titulo: "GESTIÓN Y MANEJO INTEGRAL DE RESIDUOS SÓLIDOS",
      imagen: "/DIPLOMADOS/residuos.webp",
      fechaInicio: "10/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Diplomado dirigido a bachilleres, titulados y profesionales de las carreras de ingeniería ambiental, industrial, civil, biología, química, agronómica y ramas afines.",
      modulos: [
        "Gestión y manejo de residuos sólidos en minería",
        "Gestión y manejo de residuos sólidos de construcción",
        "Formulación de proyectos de inversión pública de residuos sólidos",
        "Gestión y manejo de residuos sólidos industriales",
        "Tratamiento y reaprovechamiento de residuos sólidos",
        "Gestión y manejo de residuos sólidos hospitalarios",
        "Diseño de Rellenos sanitarios",
        "Residuos sólidos y economía circular",
        "Operatividad de las EO-RS",
        "Gestión y manejo de residuos sólidos municipales",
        "Estudio de caracterización de residuos sólidos",
        "Valorización de residuos sólidos",
      ],
    },
    {
      area: "INGENIERÍA AMBIENTAL",
      titulo: "MONITOREO Y EVALUACIÓN DE LA CALIDAD AMBIENTAL",
      imagen: "/DIPLOMADOS/calidad-ambiental.webp",
      fechaInicio: "31/08/2024",
      modalidad: "Virtual",
      duracion: "04 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Diplomado dirigida a bachilleres, titulados y profesionales de las carreras de ingenierías ambiental, químicos, agrónomo, sanitarios, biólogos y ramas afines que se encuentran involucrados en las actividades ambientales en empresas mineras o instituciones públicas como MINAM, MEM, OEFA y SERNANP.",
      modulos: [
        "Monitoreo y evaluación de la calidad de suelo",
        "Monitoreo y evaluación de radiaciones no ionizantes",
        "Monitoreo de agentes ocupacionales",
        "Monitoreo biológico",
        "Calibración de equipos de monitoreo ambiental",
        "Interpretación de informes de laboratorios",
        "Monitoreo y evaluación de la calidad de agua",
        "Monitoreo y evaluación de la calidad de aire",
        "Monitoreo y evaluación de ruido ambiental",
      ],
    },
    {
      area: "INGENIERÍA AMBIENTAL",
      titulo: "GESTIÓN AMBIENTAL MUNICIPAL Y REGIONAL",
      imagen: "/DIPLOMADOS/municipal.webp",
      fechaInicio: "05/10/2024",
      modalidad: "Virtual",
      duracion: "04 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Diplomado dirigido a gerentes municipales, gerentes de gestión ambiental, sub gerentes de gestión ambiental, sub gerentes de medio ambientes de las municipalidades provinciales y distritales, jefes de áreas en gestión ambiental, jefes de área de residuos sólidos, asistentes administrativos, practicantes, funcionarios de las municipalidades, profesionales interesados en la materia, y estudiantes universitarios.",
      modulos: [
        "Gestión y manejo de residuos sólidos municipales",
        "Estudio de caracterización de residuos sólidos municipales",
        "Gestión de área técnica municipal (ATM)",
        "Saneamiento ambiental, JASS y Diseño de UBS",
        "Tratamiento de aguas residuales",
        "Certificación ambiental para proyectos",
        "Fiscalización ambiental",
        "Diseño, construcción, operación y cierre de rellenos sanitarios",
        "Ecoeficiencia municipal y regional",
        "Gestión ambiental municipal, gobernanza ambiental y participación ciudadana",
        "Gestión del cambio climático",
      ],
    },

    // Puedes agregar más cursos aquí si es necesario
  ];

  return (
    <div>
      {cursosData.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}
    </div>
  );
};

export default DiploAmbient;
