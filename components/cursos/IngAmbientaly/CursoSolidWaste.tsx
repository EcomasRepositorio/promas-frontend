"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent2";

// GESTIÓN Y MANEJO INTEGRAL DE RESIDUOS SÓLIDOS
const modulesSolidWaste = [
  { id: 1, name: "Gestión y manejo de residuos sólidos en minería", image: "/cursos_gpt/2gestionymanejo/1.webp" },
  { id: 2, name: "Gestión y manejo de residuos sólidos de construcción", image: "/cursos_gpt/2gestionymanejo/2.webp" },
  { id: 3, name: "Formulación de proyectos de inversión pública de residuos sólidos", image: "/CURSOS/inersion-publica.webp" },
  { id: 4, name: "Gestión y manejo de residuos sólidos industriales", image: "/cursos_gpt/2gestionymanejo/4.webp" },
  { id: 5, name: "Tratamiento y reaprovechamiento de residuos sólidos", image: "/cursos_gpt/2gestionymanejo/5.webp" },
  { id: 6, name: "Gestión y manejo de residuos sólidos hospitalarios", image: "/cursos_gpt/2gestionymanejo/6.webp"},

  { id: 7, name: "Diseño de Rellenos sanitarios", image: "/cursos_gpt/2gestionymanejo/7.webp"},
  { id: 8, name: "Residuos sólidos y economía circular", image: "/cursos_gpt/2gestionymanejo/8.webp" },
  { id: 9, name: "Operatividad de las EO-RS", image: "/cursos_gpt/2gestionymanejo/9.webp" },
  { id: 10, name: "Gestión y manejo de residuos sólidos municipales", image: "/cursos_gpt/2gestionymanejo/10.webp" },
  { id: 11, name: "Estudio de caracterización de residuos sólidos", image: "/cursos_gpt/2gestionymanejo/11.webp" },
  { id: 12, name: "Valorización de residuos sólidos", image: "/cursos_gpt/2gestionymanejo/12.webp"},
];

const GraduateSolidWasteCarousel = () => {
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
          {modulesSolidWaste.map((module) => (
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

export default GraduateSolidWasteCarousel;



/* { id: 1, name: "Gestión y manejo de residuos sólidos en minería", image: "/cursos_gpt/2gestionymanejo/1.webp" },
  { id: 2, name: "Gestión y manejo de residuos sólidos de construcción", image: "/cursos_gpt/2gestionymanejo/2.webp" },
  { id: 3, name: "Formulación de proyectos de inversión pública de residuos sólidos", image: "/CURSOS/inersion-publica.webp" },
  { id: 4, name: "Gestión y manejo de residuos sólidos industriales", image: "/cursos_gpt/2gestionymanejo/4.webp" },
  { id: 5, name: "Tratamiento y reaprovechamiento de residuos sólidos", image: "/cursos_gpt/2gestionymanejo/5.webp" },
  { id: 6, name: "Gestión y manejo de residuos sólidos hospitalarios", image: "/cursos_gpt/2gestionymanejo/6.webp"},

  { id: 7, name: "Diseño de Rellenos sanitarios", image: "/CURSOS/14.webp"},
  { id: 8, name: "Residuos sólidos y economía circular", image: "/CURSOS/15.webp" },
  { id: 9, name: "Operatividad de las EO-RS", image: "/CURSOS/16.webp" },
  { id: 10, name: "Gestión y manejo de residuos sólidos municipales", image: "/cursos_gpt/2gestionymanejo/5.webp" },
  { id: 11, name: "Estudio de caracterización de residuos sólidos", image: "/CURSOS/17.webp" },
  { id: 12, name: "Valorización de residuos sólidos", image: "/CURSOS/18.webp"},
 */