"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent10";

// RESIDENCIA Y SUPERVISIÓN DE OBRAS
const modulesWorksSupervision = [
  { id: 1, name: "Planeamiento Y Programación de Obras", image: "/cursos_gpt/10planeacion_obras/1.webp" },
  { id: 2, name: "Informes de obra", image: "/cursos_gpt/10planeacion_obras/2.webp" },
  { id: 3, name: "Control técnico y calidad en obras", image: "/cursos_gpt/10planeacion_obras/3.webp" },
  { id: 4, name: "Ampliaciones de plazo, adicionales de obra y penalidades en obra", image: "/cursos_gpt/10planeacion_obras/4.webp" },
  { id: 5, name: "Recepción - liquidación de obras y medios de controversia", image: "/cursos_gpt/10planeacion_obras/5.webp" },
  { id: 6, name: "Expediente técnico como herramienta para la ejecución y supervisión de obra", image: "/cursos_gpt/10planeacion_obras/6.webp" },
  { id: 7, name: "Valorización y liquidación de obras por administración directa", image: "/cursos_gpt/10planeacion_obras/7.webp" },
  { id: 8, name: "Plan de gestión de seguridad y salud en obra", image: "/cursos_gpt/10planeacion_obras/8.webp" },
  { id: 9, name: "Contratación y ejecución de obras", image: "/cursos_gpt/10planeacion_obras/9.webp" },
  { id: 10, name: "Preliminares para inicio de obra", image: "/cursos_gpt/10planeacion_obras/10.webp" },
  { id: 11, name: "Expediente técnico como herramienta para la ejecución y supervisión de obra", image: "/cursos_gpt/10planeacion_obras/11.webp" },
];

const GraduateWorksSupervisionCarousel = () => {
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

export default GraduateWorksSupervisionCarousel;
