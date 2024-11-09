"use client"; // Asegura que este componente solo se ejecute en el cliente
import Image from "next/image";
import React from "react";
import { VscOutput } from "react-icons/vsc";
import { IoVideocamOutline } from "react-icons/io5";
import { BiRadioCircle } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdVideoCameraFront } from "react-icons/md";
import { HiVideoCamera } from "react-icons/hi2";
import { HiStatusOnline } from "react-icons/hi";
import "./Style.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
/* , Pagination */
interface CourseCardProps {
  title: string;
  imageSrc: string;
  description: string[];
  link: string;
}

const courses: CourseCardProps[] = [
  //1
  {
    title: "Fertirrigación",
    imageSrc: "/CURSOS/fertirriego.webp",
    description: [
      "Situación mundial del recurso hídrico",
      "Calidad de Agua de Riego",
      "Conceptos, Principios, Ventajas y desventajas",
      "Fertilización convencional versus fertirriego.",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Fertirrigación",
  },
  //2
  {
    title: "Monitoreo de la calidad de agua",
    imageSrc: "/CURSOS/monitoreo.webp",
    description: [
      "Monitoreo de la calidad del agua",
      "Revisión de ECAs, LMP y VMA para la calidad del agua",
      "Monitoreo de parámetros de campo y técnicas de muestreo",
      "Manejo de equipos para monitoreo de la calidad del agua",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Monitoreo%20de%20la%20calidad%20de%20agua",
  },
  //3
  {
    title: "Costos y Presupuestos con S10",
    imageSrc: "/CURSOS/costos.webp",
    description: [
      "Partes de un Presupuesto, creación de presupuesto",
      "Análisis de precios unitarios",
      "Procesamiento del Presupuesto",
      "Gastos generales",
      //"Nuevos cálculos, configuraciones y reportes",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Costos%20y%20Presupuestos%20con%20S10",
  },
  //4
  {
    title: "Formulación de proyectos de inversión pública de residuos sólidos",
    imageSrc: "/CURSOS/inersion-publica.webp",
    description: [
      // "Formulación de proyectos en gestión integral de residuos sólidos",
      "Definiciones y conceptos del invierte.pe",
      "Programación Multianual de Inversiones",
      //"Fundamentos del Sistema Nacional de Programación Multianual y Gestión de Inversiones",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Formulación%20de%20proyectos%20de%20inversión%20pública%20de%20residuos%20sólidos",
  },
  //5
  {
    title: "Esquema FSSC 22000",
    imageSrc: "/CURSOS/esquema.webp",
    description: [
      "Diseño y propósitos del esquema",
      "Implementación de la FSSC 22000",
      "Planificación y realización de productos inocuos",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Esquema%20FSSC%2022000",
  },
  //6
  {
    title: "Identificación y evaluación de Impacto Ambiental",
    imageSrc: "/CURSOS/impacto.webp",
    description: [
      //"Objetivos de la evaluación de impactos y principales conceptos",
      "Proceso de identificación de impactos",
      "Metodologías de evaluación",
      "Áreas de influencia, impactos directos e indirectos",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Identificación%20y%20evaluación%20de%20Impacto%20Ambiental",
  },
  
//esto ya esta para cambiar 
/* 
[
  {
    title: "Monitoreo y evaluación de radiaciones no ionizantes",
    imageSrc: "/CURSOS/radiaciones.webp",
    description: [
      "Fundamentos de radiaciones no ionizantes",
      "Métodos de monitoreo y evaluación",
      "Normativas y estándares de seguridad",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Monitoreo%20y%20evaluación%20de%20radiaciones%20no%20ionizantes",
  },
  {
    title: "Operatividad de las Empresas Operadoras de Residuos Sólidos",
    imageSrc: "/CURSOS/residuos.webp",
    description: [
      "Marco regulatorio para la gestión de residuos",
      "Optimización de operaciones de recolección y tratamiento",
      "Buenas prácticas para empresas de residuos sólidos",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Operatividad%20de%20las%20Empresas%20Operadoras%20de%20Residuos%20Sólidos",
  },
  {
    title: "Estudios Geológicos y geotécnicos en puentes",
    imageSrc: "/CURSOS/geologia_puentes.webp",
    description: [
      "Principios de geología y geotecnia en ingeniería de puentes",
      "Evaluación del suelo y estabilidad",
      "Impacto de condiciones geológicas en estructuras",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Estudios%20Geológicos%20y%20geotécnicos%20en%20puentes",
  },
  {
    title: "Monitoreo biológico",
    imageSrc: "/CURSOS/monitoreo_biologico.webp",
    description: [
      "Introducción al monitoreo de indicadores biológicos",
      "Métodos de recolección y análisis de muestras",
      "Interpretación de datos en estudios ambientales",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Monitoreo%20biológico",
  },
  {
    title: "Estudios de Hidrología e hidráulica en puentes",
    imageSrc: "/CURSOS/hidrologia_puentes.webp",
    description: [
      "Conceptos básicos de hidrología aplicada",
      "Análisis hidráulico para diseño de puentes",
      "Impacto de flujos de agua en infraestructura",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Estudios%20de%20Hidrología%20e%20hidráulica%20en%20puentes",
  },
  {
    title: "Técnicas de laboratorio forense",
    imageSrc: "/CURSOS/forense.webp",
    description: [
      "Principios de análisis forense en laboratorio",
      "Métodos de recolección y preservación de evidencias",
      "Tecnologías avanzadas en estudios criminalísticos",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Técnicas%20de%20laboratorio%20forense",
  },
  {
    title: "Supervisión, Fiscalización y auditoría ambiental",
    imageSrc: "/CURSOS/auditoria_ambiental.webp",
    description: [
      "Conceptos clave de supervisión ambiental",
      "Técnicas de fiscalización en proyectos",
      "Normativa y estándares de auditoría ambiental",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Supervisión,%20Fiscalización%20y%20auditoría%20ambiental",
  },
  {
    title: "Riego tecnificado por aspersión",
    imageSrc: "/CURSOS/riego_aspersión.webp",
    description: [
      "Diseño de sistemas de riego por aspersión",
      "Instalación y mantenimiento de sistemas de riego",
      "Optimización de recursos hídricos en agricultura",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Riego%20tecnificado%20por%20aspersión",
  },
  {
    title: "Diseño de redes de alcantarillado",
    imageSrc: "/CURSOS/alcantarillado.webp",
    description: [
      "Principios de diseño de sistemas de alcantarillado",
      "Cálculo y dimensionamiento de redes",
      "Normativas y regulaciones en infraestructura",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Diseño%20de%20redes%20de%20alcantarillado",
  },
  {
    title: "Geología – Geotecnia en obras viales",
    imageSrc: "/CURSOS/geotecnia_vial.webp",
    description: [
      "Aplicaciones de geotecnia en proyectos viales",
      "Estudios de suelo y análisis de riesgos",
      "Optimización de diseño para estabilidad estructural",
    ],
    link: "https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20el%20curso%20de%20Geología%20-%20Geotecnia%20en%20obras%20viales",
  },
];

*/

];

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  imageSrc,
  description,
  link,
}) => (
  <Link href={link} target="_blank">
    <div className="lg:w-[400px] xl:w-[400px] w-[350px] h-[400px] bg-transparent cursor-pointer group perspective mb-20">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <Image
            alt="PROMÁS"
            src={imageSrc}
            width={800}
            height={600}
            className="w-full h-full"
            priority={true}
          />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="flex flex-col h-full px-4 py-6">
            <div className="grid grid-cols-2 text-gray-100 font-semibold text-left">
              <p className="flex items-center bg-pink-600 p-2">
                <IoVideocamOutline className="flex-shrink-0" />
                <span className="ml-2 text-xs">Capacitaciones</span>
              </p>
              <p className="flex items-center justify-end bg-pink-600 p-2">
                <BiRadioCircle className="" />
                <span className="ml-2 text-xs">En vivo</span>
              </p>
            </div>
            <h1 className="text-lg text-center font-extrabold text-pink-500 mt-4">
              {title}
            </h1>
            <div className="hidden md:block text-left text-xs font-semibold text-gray-500 px-2">
              {description.map((desc, idx) => (
                <p key={idx} className="flex items-center border-b p-1">
                  <VscOutput className="text-pink-600 flex-shrink-0" />
                  <span className="ml-2">{desc}</span>
                </p>
              ))}
            </div>
            <div className="grid md:grid-cols-2 text-left text-gray-100 font-semibold px-2 gap-2 mt-4">
              <p className="flex items-center bg-violet-600 lg:py-1 py-1 px-2 rounded-xl mb-2">
                <FaChalkboardTeacher className="flex-shrink-0 text-xl" />
                <span className="ml-2 text-xs">Docentes especializados</span>
              </p>
              <p className="flex items-center bg-violet-600 lg:py-1 py-1 px-2 rounded-xl mb-2">
                <MdVideoCameraFront className="flex-shrink-0 text-xl" />
                <span className="ml-2 text-xs">Clases grabadas</span>
              </p>
              <p className="flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4">
                <HiVideoCamera className="flex-shrink-0 border rounded-full p-1 text-xl" />
                <span className="ml-2 text-xs">Plataforma Zoom</span>
              </p>
              <p className="flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4">
                <HiStatusOnline className="flex-shrink-0 text-xl" />
                <span className="ml-2 text-xs">Clases onLine 100% en vivo</span>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="uppercase text-xs px-4 py-1 mt-2 border border-violet-700 hover:bg-violet-700 hover:text-gray-100 font-semibold text-gray-500 rounded-full duration-300 hover:scale-110">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const Course = () => (
  <section className="bg-[#030014] px-6">
    <div className="text-center">
      <h1 className="uppercase text-white font-extrabold text-4xl pt-10 pb-10">
        Nuestros cursos
      </h1>
    </div>
    
    {/* Contenedor del carrusel con un ancho máximo y centrado */}
    <div className="max-w-[1400px] mx-auto"> {/* Ajusta el valor de max-w según el límite que desees */}
    <Swiper
  modules={[Navigation/* , Pagination */, Autoplay]}
  loop
  spaceBetween={20} // Aumenta el espacio para evitar solapamiento
  slidesPerView={1} // Solo una imagen completa visible
  centeredSlides
  autoplay={{ delay: 3000 }}
  grabCursor
/*   pagination={{ clickable: true }}*/
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 80 }, // Muestra una imagen completa en pantallas pequeñas
    640: { slidesPerView: 1.5, spaceBetween: 15 },
    940: { slidesPerView: 2, spaceBetween: 20 },
    1200: { slidesPerView: 2.5, spaceBetween: 20 },
    1400: { slidesPerView: 3, spaceBetween: 20 },
  }}
>

        {courses.map((course, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center mt-10">
              <CourseCard {...course} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Course;