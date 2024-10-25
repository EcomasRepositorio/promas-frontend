"use client";
import Curso from "./diplomadosAccordion";

const DiploAlimentarias = () => {
  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      area: "INGENIERÍA EN ALIMENTOS",
      titulo: "GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA",
      imagen: "/DIPLOMADOS/calidad.webp",
      fechaInicio: "22/09/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Diplomado dirigido a bachilleres, titulados y profesionales de las carreras de ingeniería de industria alimentarias, agroindustriales, agrónomos, biólogos y carreras afines a la calidad e inocuidad, jefes, supervisores y personal técnico involucrado en actividad es relacionadas con alguna etapa de la cadena alimentaria: producción primaria, transporte, almacenamiento y elaboración.",
      modulos: [
        "Interpretación e implementación de la norma ISO 31000 - Gestión de Riesgos",
        "Programas Pre-requisitos con base en ISO 22002-1 y BRC v.09",
        "Análisis de peligros y puntos críticos de control (HACCP)",
        "Esquema FSSC 22000",
        "Fundamentos e Interpretación de los Sistemas de Gestión de la Calidad ISO 9001",
        "Inspección y muestreo de alimentos",
        "Trazabilidad y etiquetado",
        "Auditoria del Sistema de Gestión de Calidad e Inocuidad Alimentaria en base a la Norma ISO 19011",
        "Calidad e Inocuidad alimentaria",
      ],
    },

    {
      area: "INGENIERÍA EN ALIMENTOS",
      titulo: "SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE",
      imagen: "/DIPLOMADOS/SSOMA.webp",
      fechaInicio: "22/09/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "El diplomado especializado está dirigido a ingenieros y supervisores de seguridad, prevencionistas, capataces y jefes, miembros del comité de seguridad, profesionales en general, estudiantes universitarios, bachilleres, técnicos y a todos aquellos interesados en el manejo competente de los asuntos de seguridad y salud ocupacional.",
      modulos: [
        "Elaboración de matriz IPERC - mapa de riesgos",
        "Comité de seguridad y salud en el trabajo",
        "Seguridad en trabajo de alto riesgo",
        "Investigación y reporte de accidentes laborales",
        "Prevención de riesgos laborales",
        "Fiscalización y auditorias de SSO - SUNAFIL",
        "Fiscalización ambiental",
        "Supervisor SSOMA",
        "Auditor Interno SSOMA",
        "Gestión ambiental - ISO 14001",
        "Implementación de sistema de gestión de SST",
      ],
    },
  ];

  return (
    <div>
      {cursosData.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}
    </div>
  );
};

export default DiploAlimentarias;
