"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent";

const modulesAmbientaly = [
  {
    id: 1,
    name: "Elaboración de mapas temáticos con ArcGIS",
    image: "/cursos_gpt/1ambient/1.webp",
  },
  { 
    id: 2, 
    name: "Participación ciudadana", 
    image: "/cursos_gpt/1ambient/2.webp" },
  {
    id: 3,
    name: "Supervisión, Fiscalización y auditoría ambiental",
    image: "/cursos_gpt/1ambient/3.webp",
  },
  {
    id: 4,
    name: "Elaboración de informe de EIA",
    image: "/cursos_gpt/1ambient/4.webp",
  },
  { 
    id: 5, 
    name: "Legislación ambiental", 
    image: "/cursos_gpt/1ambient/5.webp" },
  {
    id: 6,
    name: "Instrumentos de gestión ambiental",
    image: "/cursos_gpt/1ambient/6.webp",
  },
  {id: 7,
    name: "Línea base de estudio de impacto ambiental",
    image: "/cursos_gpt/1ambient/7.webp",
  },
  {
    id: 8,
    name: "Identificación y evaluación de impacto ambiental",
    image: "/cursos_gpt/1ambient/8.webp",
  },
  { 
    id: 9, 
    name: "Valoración Económica Ambiental", 
    image: "/cursos_gpt/1ambient/9.webp" },
  { 
    id: 10, 
    name: "Estrategias de manejo ambiental", 
    image: "/cursos_gpt/1ambient/10.webp" },
  {
    id: 11,
    name: "Plan de cierre y post cierre de proyectos",
    image: "/cursos_gpt/1ambient/11.webp",
  },
  {
    id: 12,
    name: "Calidad ambiental, evaluación de riesgos y técnicas de remediación ambiental",
    image: "/cursos_gpt/1ambient/12.webp",
  },
];

const GraduateAmbientalyCarousel = () => {
  const [selectedModalId, setSelectedModalId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedModalId(id);
  };

  const closeModal = () => {
    setSelectedModalId(null);
  };

  const currentModal = modalContent.find(
    (modal) => modal.id === selectedModalId
  );

  return (
    <section className="bg-white px-6">
      <div
        className={`${styles.paddings} relative z-10 max-w-[1400px] mx-auto`}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 3000 }}
          grabCursor
          breakpoints={{
            870: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 20 },
            1100: { slidesPerView: 2, spaceBetween: 10 },
            1300: { slidesPerView: 2, spaceBetween: 10 },
            1400: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesAmbientaly.map((module) => (
            <SwiperSlide key={module.id}>
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full h-full sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden">
                  <h3 className="sr-only">{module.name}</h3>
                  <Image
                    src={module.image}
                    alt={module.name}
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="rounded-xl"
                    priority={true}
                    unoptimized={true}
                  />
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => openModal(module.id)}
                >
                  Más Información
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {currentModal && (
        <CustomModal
          isOpen={!!selectedModalId}
          onClose={closeModal}
          title={currentModal.title}
          content={currentModal.content}
        />
      )}
    </section>
  );
};

export default GraduateAmbientalyCarousel;

/* const modulesAmbientaly = [
  {name: "Elaboración de mapas temáticos con ArcGIS",image: "/CURSOS/costos.webp",},
  { name: "Participación ciudadana", image: "/CURSOS/esquema.webp" },
  {name: "Supervisión, Fiscalización y auditoría ambiental",image: "/CURSOS/fertirriego.webp",},
  { name: "Elaboración de informe de EIA", image: "/CURSOS/inersion-publica.webp" },
  //{ name: "Legislación ambiental", image: "/CURSOS/12.webp" },
  //{ name: "Instrumentos de gestión ambiental", image: "/CURSOS/13.webp" },
  //{ name: "Línea base de estudio de impacto ambiental", image: "/CURSOS/14.webp" },
  {name: "Identificación y evaluación de impacto ambiental",image: "/CURSOS/impacto.webp",},
  //{ name: "Valoración Económica Ambiental", image: "/CURSOS/16.webp" },
  //{ name: "Estrategias de manejo ambiental", image: "/CURSOS/17.webp" },
  //{ name: "Plan de cierre y post cierre de proyectos", image: "/CURSOS/18.webp" },
  //{ name: "Calidad ambiental, evaluación de riesgos y técnicas de remediación ambiental", image: "/CURSOS/19.webp" },
]; */
