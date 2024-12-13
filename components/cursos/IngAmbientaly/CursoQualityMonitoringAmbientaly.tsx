"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent3";

// MONITOREO Y EVALUACIÓN DE LA CALIDAD AMBIENTAL
const modulesQualityMonitoringAmbientaly = [
  { id: 1, name: "Monitoreo y evaluación de la calidad de suelo", image: "/cursos_gpt/3calidad-ambiental/1.webp" },
  { id: 2, name: "Monitoreo y evaluación de radiaciones no ionizantes", image: "/cursos_gpt/3calidad-ambiental/2.webp" },
  { id: 3, name: "Monitoreo de agentes ocupacionales", image: "/cursos_gpt/3calidad-ambiental/3.webp" },
  { id: 4, name: "Monitoreo biológico", image: "/cursos_gpt/3calidad-ambiental/4.webp" },
  { id: 6, name: "Calibración de equipos de monitoreo ambiental", image: "/cursos_gpt/3calidad-ambiental/5.webp" },
  { id: 5, name: "Monitoreo y evaluación de la calidad de agua", image: "/CURSOS/monitoreo.webp" },
  { id: 7, name: "Interpretación de informes de laboratorios", image: "/cursos_gpt/3calidad-ambiental/6.webp" },
  { id: 8, name: "Monitoreo y evaluación de la calidad de aire", image: "/cursos_gpt/3calidad-ambiental/7.webp" },
  { id: 9, name: "Monitoreo y evaluación de ruido ambiental", image: "/cursos_gpt/3calidad-ambiental/8.webp" },
];

const GraduateQualityMonitoringAmbientalyCarousel = () => {
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
            870: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1100: { slidesPerView: 2, spaceBetween: 10 },
            1300: { slidesPerView: 2, spaceBetween: 10 },
            1400: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesQualityMonitoringAmbientaly.map((module) => (
            <SwiperSlide key={module.id}>
              <div className="flex flex-col items-center justify-center">
                <div
                  className="relative w-full h-full sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => openModal(module.id)}
                >
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

export default GraduateQualityMonitoringAmbientalyCarousel;

/* { name: "Monitoreo y evaluación de la calidad de suelo", image: "/cursos_gpt/3calidad-ambiental/1.webp" },
  { name: "Monitoreo y evaluación de radiaciones no ionizantes", image: "/cursos_gpt/3calidad-ambiental/2.webp" },
  { name: "Monitoreo de agentes ocupacionales", image: "/cursos_gpt/3calidad-ambiental/3.webp" },
  { name: "Monitoreo biológico", image: "/cursos_gpt/3calidad-ambiental/4.webp" },
  //{ name: "Calibración de equipos de monitoreo ambiental", image: "/cursos_gpt/3calidad-ambiental/5.webp" },
  //{ name: "Interpretación de informes de laboratorios", image: "/cursos_gpt/3calidad-ambiental/6.webp" },
  { name: "Monitoreo y evaluación de la calidad de agua", image: "/CURSOS/monitoreo.webp" },//esta cambiado img
  //{ name: "Monitoreo y evaluación de la calidad de aire", image: "/CURSOS/15.webp" },
  //{ name: "Monitoreo y evaluación de ruido ambiental", image: "/CURSOS/16.webp" }, */