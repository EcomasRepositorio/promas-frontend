"use client"
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import React, {  } from 'react';

import styles from '@/styles/index';
import { insights } from '@/components/utils/constants/index';
import { staggerContainer } from '../utils/motion';
import GraduateCard  from './GraduateCard';
import { TitleText, TypingText } from '../share/CustomText'

const variants = staggerContainer("0.1s", "0.1s");

const Graduate: React.FC = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col max-w-screen-xl`}
    >
      <TypingText title="| PROMAS" textStyles="text-center" />
      <TitleText title={<>Nuestros Diplomados</>} textStyles="text-center" />
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-14">
        {insights.map((item, index: number) => (
          <GraduateCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Graduate;