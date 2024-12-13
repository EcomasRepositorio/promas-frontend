"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent12";

// SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE (SSOMA)
const modulesSsoma = [
  { id: 1, name: "Elaboración de matriz IPERC - mapa de riesgos", image: "/cursos_gpt/12ssoma/1_!.webp" },
  { id: 2, name: "Comité de seguridad y salud en el trabajo", image: "/cursos_gpt/12ssoma/1.webp" },
  { id: 3, name: "Seguridad en trabajo de alto riesgo", image: "/cursos_gpt/12ssoma/2.webp" },
  { id: 4, name: "Investigación y reporte de accidentes laborales", image: "/cursos_gpt/12ssoma/3.webp" },
  { id: 5, name: "Prevención de riesgos laborales", image: "/cursos_gpt/12ssoma/4.webp" },
  { id: 6, name: "Fiscalización y auditorias de SSO - SUNAFIL", image: "/cursos_gpt/12ssoma/5.webp" },
  { id: 7, name: "Fiscalización ambiental", image: "/cursos_gpt/12ssoma/6.webp" },
  { id: 8, name: "Supervisor SSOMA", image: "/cursos_gpt/12ssoma/8.webp" },
  { id: 9, name: "Auditor Interno SSOMA", image: "/cursos_gpt/12ssoma/9.webp" },
  { id: 10, name: "Gestión ambiental - ISO 14001", image: "/cursos_gpt/12ssoma/10.webp" },
  { id: 11, name: "Implementación de sistema de gestión de SST", image: "/cursos_gpt/12ssoma/11.webp" },
];

const GraduateSsomaCarousel = () => {
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
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesSsoma.map((module) => (
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

export default GraduateSsomaCarousel;
