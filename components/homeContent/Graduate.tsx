"use client"
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import React, {  } from 'react';

import styles from '@/styles/index';
import { insights } from '@/components/utils/constants/index';
import { staggerContainer } from '../utils/motion';
import GraduateCard  from './GraduateCard';
import { TitleText, TypingText } from '../share/CustomText'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const variants = staggerContainer("0.1s", "0.1s");

const Graduate: React.FC = () => (
  <section className='bg-[#030014]'>
    <div className={`${styles.paddings} relative z-10 max-w-screen-xl mx-auto`}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth}`}>
        <TypingText title="Nuestros Diplomados" textStyles="text-center pt-24" />
      </motion.div>

      {/* Carrusel solo visible en móviles */}
      <div className="block sm:hidden mx-auto mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
        >
          {insights.map((item, index) => (
            <SwiperSlide key={index}>
              <GraduateCard {...item} index={index + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grilla solo visible en pantallas más grandes */}
      <div className="hidden sm:grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-14 mt-12">
        {insights.map((item, index: number) => (
          <GraduateCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </div>
  </section>
);

export default Graduate;

