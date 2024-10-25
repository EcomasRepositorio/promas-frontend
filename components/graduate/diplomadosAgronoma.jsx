"use client";
import Curso from "./diplomadosAccordion";

const DiploAgronoma = () => {
  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      area: "INGENIERÍA AGRÓNOMA",
      titulo: "RIEGO Y FERTIRRIEGO",
      imagen: "/DIPLOMADOS/fertirriengo.webp",
      fechaInicio: "18/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Dirigido a gerentes de proyectos, residentes y supervisores de obras. Ingenieros agrícolas, agrónomos, civiles, hidráulicos y todos los profesionales que manejen proyectos y ejecución de obras con riego tecnificado.",
      modulos: [
        "Nutrición vegetal y principios de fertirriego",
        "Riego tecnificado por aspersión",
        "Riego tecnificado por goteo",
        "Fertirrigación",
        "Fertirriego de cultivos y monitoreo",
        "Producción de cultivos sin suelo",
        "Mantenimiento del sistema de riego",
        "Interpretación y análisis de suelos",
        "Calidad de agua para riego",
      ],
    },
    {
      area: "INGENIERÍA AGRÓNOMA",
      titulo: "SISTEMA DE RIEGO TECNIFICADO",
      imagen: "/DIPLOMADOS/riego.webp",
      fechaInicio: "31/08/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Dirigido a gerentes de proyectos, residentes y supervisores de obras. Ingenieros agrícolas, agrónomos, civiles, hidráulicos y todos los profesionales que manejen proyectos y ejecución de obras con riego tecnificado..",
      modulos: [
        "Sistemas de riego tecnificado por goteo",
        "Fertiirrigación",
        "Análisis de suelo, agua y foliar",
        "Importancia del suelo en la agricultura",
        "Hidráulica de tuberías",
        "Descarga de data y parámetros geomorfológicos de la cuenca",
        "Calidad del agua para riego",
        "Oferta y demanda hídrica en cultivos",
        "Sistemas de riego tecnificado por aspersión",
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

export default DiploAgronoma;
