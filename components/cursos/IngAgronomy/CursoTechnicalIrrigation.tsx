"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent6";

// SISTEMA DE RIEGO TECNIFICADO
const modulesTechnicalIrrigation = [
  { id: 1, name: "Sistemas de riego tecnificado por goteo", image: "/cursos_gpt/6riego-tec/1.webp" },
  { id: 2, name: "Fertiirrigación", image: "/cursos_gpt/6riego-tec/2.webp" },
  { id: 3, name: "Análisis de suelo, agua y foliar", image: "/cursos_gpt/6riego-tec/3.webp" },
  { id: 4, name: "Importancia del suelo en la agricultura", image: "/cursos_gpt/6riego-tec/4.webp" },
  { id: 5, name: "Costos y Presupuestos con S10", image: "/CURSOS/costos.webp" },
  { id: 6, name: "Hidráulica de tuberías", image: "/cursos_gpt/6riego-tec/5.webp" },
  { id: 7, name: "Descarga de data y parámetros geomorfológicos de la cuenca", image: "/cursos_gpt/6riego-tec/6.webp" },
  { id: 8, name: "Calidad del agua para riego", image: "/cursos_gpt/6riego-tec/7.webp" },
  { id: 9, name: "Oferta y demanda hídrica en cultivos", image: "/cursos_gpt/6riego-tec/8.webp" },
  { id: 10, name: "Sistemas de riego tecnificado por aspersión", image: "/cursos_gpt/6riego-tec/9.webp" },
];

const GraduateTechnicalIrrigationCarousel = () => {
  const [selectedModalId, setSelectedModalId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedModalId(id);
  };

  const closeModal = () => {
    setSelectedModalId(null);
  };

  const currentModal = modalContent.find((modal) => modal.id === selectedModalId);

  return (
    <section className="bg-white px-6 mb-20">
      <div className={`${styles.paddings} relative z-10 max-w-[1400px] mx-auto`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 3000 }}
          grabCursor
          pagination={{ clickable: true }}
          breakpoints={{
            870: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1100: { slidesPerView: 2, spaceBetween: 10 },
            1300: { slidesPerView: 2, spaceBetween: 10 },
            1400: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesTechnicalIrrigation.map((module) => (
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

export default GraduateTechnicalIrrigationCarousel;

