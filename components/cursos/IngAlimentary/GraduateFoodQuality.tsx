"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent11";

// RESIDENCIA Y SUPERVISIÓN DE OBRAS
const modulesWorksSupervision = [
  {id: 1, name: "Interpretación e implementación de la norma ISO 31000 - Gestión de Riesgos", image: "/cursos_gpt/11gestion_calidad/1.webp" },
  {id: 2,  name: "Programas Pre-requisitos con base en ISO 22002-1 y BRC v.09", image: "/cursos_gpt/11gestion_calidad/2.webp" },
  {id: 3, name: "Análisis de peligros y puntos críticos de control (HACCP)", image: "/cursos_gpt/11gestion_calidad/3.webp" },
  {id: 4, name: "Esquema FSSC 22000", image: "/CURSOS/esquema.webp" },//esta cambiado 
  {id: 5, name: "Fundamentos e Interpretación de los Sistemas de Gestión de la Calidad ISO 9001", image: "/cursos_gpt/11gestion_calidad/5.webp" },
  {id: 6, name: "Inspección y muestreo de alimentos", image: "/cursos_gpt/11gestion_calidad/6.webp" },
  {id: 7, name: "Trazabilidad y etiquetado", image: "/cursos_gpt/11gestion_calidad/7.webp" },
  {id: 8, name: "Auditoria del Sistema de Gestión de Calidad e Inocuidad Alimentaria en base a la Norma ISO 19011", image: "/cursos_gpt/11gestion_calidad/8.webp" },
  {id: 9, name: "Calidad e Inocuidad alimentaria", image: "/cursos_gpt/11gestion_calidad/9.webp" },   
];

const GraduateFoodQualityCarousel = () => {
  const [selectedModalId, setSelectedModalId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedModalId(id);
  };

  const closeModal = () => {
    setSelectedModalId(null);
  };

  const currentModal = modalContent.find((modal) => modal.id === selectedModalId);

  return (
    <section className="bg-white px-6">
      <div className={`${styles.paddings} relative z-10 max-w-[1400px] mx-auto`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 3000 }}
          grabCursor
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesWorksSupervision.map((module) => (
            <SwiperSlide key={module.id}>
              <div className="flex flex-col items-center justify-center">
                <div
                  className="relative w-full h-[300px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => openModal(module.id)}
                >
                  <h3 className="sr-only">{module.name}</h3>
                  <Image
                    src={module.image}
                    alt={module.name}
                    layout="fill"
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

      {/* Modal */}
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

export default GraduateFoodQualityCarousel;

/* const modulesFoodQuality = [
  { name: "Interpretación e implementación de la norma ISO 31000 - Gestión de Riesgos", image: "/cursos_gpt/11gestion_calidad/1.webp" },
  { name: "Programas Pre-requisitos con base en ISO 22002-1 y BRC v.09", image: "/cursos_gpt/11gestion_calidad/2.webp" },
  { name: "Análisis de peligros y puntos críticos de control (HACCP)", image: "/cursos_gpt/11gestion_calidad/3.webp" },
  { name: "Esquema FSSC 22000", image: "/CURSOS/esquema.webp" },//esta cambiado 
  { name: "Fundamentos e Interpretación de los Sistemas de Gestión de la Calidad ISO 9001", image: "/cursos_gpt/11gestion_calidad/5.webp" },
  { name: "Inspección y muestreo de alimentos", image: "/cursos_gpt/11gestion_calidad/6.webp" },
  { name: "Trazabilidad y etiquetado", image: "/cursos_gpt/11gestion_calidad/7.webp" },
  { name: "Auditoria del Sistema de Gestión de Calidad e Inocuidad Alimentaria en base a la Norma ISO 19011", image: "/cursos_gpt/11gestion_calidad/8.webp" },
  { name: "Calidad e Inocuidad alimentaria", image: "/cursos_gpt/11gestion_calidad/9.webp" },      */