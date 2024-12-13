"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent4";

// GESTIÓN AMBIENTAL MUNICIPAL Y REGIONAL
const modulesManagementAmbientaly = [
  { id: 1, name: "Gestión y manejo de residuos sólidos municipales", image: "/cursos_gpt/4gestion-municipal/1.webp" },
  { id: 2, name: "Estudio de caracterización de residuos sólidos municipales", image: "/cursos_gpt/4gestion-municipal/2.webp" },
  { id: 3, name: "Gestión de área técnica municipal (ATM)", image: "/cursos_gpt/4gestion-municipal/3.webp" },
  { id: 4, name: "Saneamiento ambiental, JASS y Diseño de UBS", image: "/cursos_gpt/4gestion-municipal/4.webp" },
  { id: 5, name: "Certificación ambiental para proyectos", image: "/cursos_gpt/4gestion-municipal/6.webp"},


  { id: 6, name: "Tratamiento de aguas residuales", image: "/cursos_gpt/4gestion-municipal/5.webp" },
  { id: 7, name: "Fiscalización ambiental", image: "/cursos_gpt/4gestion-municipal/8.webp" },
  { id: 8, name: "Diseño, construcción, operación y cierre de rellenos sanitarios", image: "/cursos_gpt/4gestion-municipal/9.webp" },
  { id: 9, name: "Ecoeficiencia municipal y regional", image: "/cursos_gpt/4gestion-municipal/10.webp" },
  { id: 10, name: "Gestión ambiental municipal, gobernanza ambiental y participación ciudadana", image: "/cursos_gpt/4gestion-municipal/11.webp" },
  { id: 11, name: "Gestión del cambio climático", image: "/cursos_gpt/4gestion-municipal/12.webp" },

];
const GraduateManagementAmbientalyCarousel = () => {
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
          grabCursor
          breakpoints={{
            870: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1100: { slidesPerView: 2, spaceBetween: 10 },
            1300: { slidesPerView: 2, spaceBetween: 10 },
            1400: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesManagementAmbientaly.map((module) => (
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

export default GraduateManagementAmbientalyCarousel;

