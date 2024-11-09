"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "@/styles/index";
import { insights } from "@/components/utils/constants/index";
import { staggerContainer } from "../utils/motion";
import GraduateCard from "./GraduateCard";
import { TitleText, TypingText } from "../share/CustomText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation /* , Pagination */, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const variants = staggerContainer("0.1s", "0.1s");

const Graduate: React.FC = () => (
  <section className="bg-[#030014]">
    <div className={`${styles.paddings} relative z-10 max-w-[1400px] mx-auto`}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} max-w-full overflow-hidden`}
      >
        <TypingText
          title="Nuestros Diplomados"
          textStyles="text-center pt-24"
        />
      </motion.div>

      {/* Carrusel adaptativo para todas las pantallas */}
      <Swiper
        modules={[Navigation /* , Pagination */, Autoplay]}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          940: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 2.5, spaceBetween: 30 },
          1400: { slidesPerView: 3, spaceBetween: 30 },
        }}
        centeredSlides={true} // Centramos el slide actual
        autoplay={{ delay: 3000 }}
        /*         pagination={{ clickable: true }}*/
        navigation
        className="mx-auto mt-2"
      >
        {insights.map((item, index) => (
          <SwiperSlide key={index}>
            <GraduateCard {...item} index={index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Graduate;
