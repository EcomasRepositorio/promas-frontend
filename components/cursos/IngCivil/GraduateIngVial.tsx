"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import styles from "@/styles/index";
import CustomModal from "@/components/modals/CustomModal";
import { modalContent } from "@/components/data/modalContent8";

// INGENIERÍA VIAL
const modulesingVial = [
  { id: 1, name: "Geología Geotecnia en obras viales", image: "/cursos_gpt/8ing_vial/1.webp" },
  { id: 2, name: "Suelos y pavimentos", image: "/cursos_gpt/8ing_vial/2.webp" },
  { id: 3, name: "Hidrología e hidráulica", image: "/cursos_gpt/8ing_vial/3.webp" },
  { id: 4, name: "Estructuras en carreteras - puentes", image: "/cursos_gpt/8ing_vial/4.webp" },
  { id: 5, name: "Metrados, costos y presupuesto cronograma en obras viales", image: "/cursos_gpt/8ing_vial/5.webp" },
  { id: 6, name: "Arqueología en proyectos viales", image: "/cursos_gpt/8ing_vial/6.webp" },
  { id: 7, name: "Estudio medio ambiental-derecho de vía-interferencias", image: "/cursos_gpt/8ing_vial/7.webp" },
  { id: 8, name: "Diseño, construcción y mantenimiento de túneles", image: "/cursos_gpt/8ing_vial/8.webp" },
  { id: 9, name: "Integración de proyectos de infraestructura vial", image: "/cursos_gpt/8ing_vial/9.webp" },
  { id: 10, name: "Tráfico y carga", image: "/cursos_gpt/8ing_vial/10.webp" },
  { id: 11, name: "Topografía, diseño geométrico, señalización y seguridad vial", image: "/cursos_gpt/8ing_vial/11.webp" },
];

const GraduateingVialCarousel = () => {
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
            640: { slidesPerView: 1, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesingVial.map((module) => (
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

export default GraduateingVialCarousel;
