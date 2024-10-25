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
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface CourseCardProps {
  title: string;
  imageSrc: string;
  description: string[];
  link: string;
}

const courses = [
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
];

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  imageSrc,
  description,
  link,
}) => (
  <Link href={link} target="_blank">
  <div className="lg:w-[350px] xl:w-[400px] w-[400px] h-[400px] bg-transparent cursor-pointer group perspective mb-20">
    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
      <div className="absolute backface-hidden border-2 w-full h-full">
        <Image
          alt="promas"
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
             <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiVideoCamera className='flex-shrink-0 border rounded-full p-1 text-xl' />
                <span className='ml-2 text-xs'>Plataforma Zoom</span>
              </p>
              <p className='flex items-center bg-violet-600 lg:py-1 py-2 px-2 rounded-xl mb-4'>
                  <HiStatusOnline className='flex-shrink-0 text-xl' />
                <span className='ml-2 text-xs'>Clases onLine 100% en vivo</span>
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
    {" "}
    {/* Añade padding horizontal aquí */}
    <div className="text-center">
      <h1 className="uppercase text-white font-extrabold text-4xl pt-10 pb-10">
        Nuestros cursos
      </h1>
    </div>
    {/* Carrusel para móviles */}
    <div className="block sm:hidden mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        autoplay={{ delay: 3000 }}
        grabCursor
        pagination={{ clickable: true }}
      >
        {courses.map((course, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center">
              <CourseCard {...course} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* Grilla para pantallas grandes */}
    <div className="hidden sm:grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto justify-center items-center gap-10 text-white pb-20">
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  </section>
);

export default Course;
