"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/utils/motion";
//import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const images = [
  { src: "/IMAGEN.png", variants: slideInFromRight(0.1) },
  { src: "/logo_promas_3.png", variants: slideInFromRight(0.1) },
  { src: "/logo_promas_2.png", variants: slideInFromRight(0.1) }
];

const texts = [
  "Tu puerta abierta al conocimiento en vivo, desde donde estes...",
  "Texto 2",
  "Texto 3"
];

const tittle = [
  "DIPLOMADOS, CURSOS PROMAS",
  "Texto 2",
  "Texto 3"
];

const Hero = () => {

  const [index, setIndex] = useState(0);
  const [tittle1, setTittle1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex lg:flex-row flex-col items-center justify-center lg:ml-24 px-10 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          key={index}
          initial="initial"
          animate="visible"
          exit="hidden"
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-6xl text-5xl font-bold text-white max-w-[800px] w-auto h-auto"
        >
          <span>
            Diplomados
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              PROMAS{" "}
            </span>
            Cursos
          </span>
        </motion.div>

        <AnimatePresence>
          {texts.map((text, i) => (
            i === index && (
              <motion.p
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(0.8)}
                className="lg:text-2xl text-gray-200 my-5 max-w-[600px]"
              >
                {text}
              </motion.p>
            )
          ))}
        </AnimatePresence>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Contacto
        </motion.a>
      </div>

      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.1)}
        className="w-full h-full flex justify-center items-center lg:mr-36 mt-10 lg:mt-0"
      >
        <Image
          key={index}
          src={images[index].src}
          alt="icons"
          height={1850}
          width={1800}
        />
      </motion.div>

    </motion.div>
  );
};

export default Hero;
