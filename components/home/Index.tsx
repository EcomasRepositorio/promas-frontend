"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/utils/motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const images = [
  { src: "/IMAGEN.png", variants: slideInFromRight(1) },
  { src: "/IMAGEN.png", variants: slideInFromRight(1) },
  { src: "/IMAGEN.png", variants: slideInFromRight(1) }
];

const texts = [
  "Tu puerta abierta al conocimiento en vivo, desde donde estes...",
  "Descubre la excelencia con Promas",
  "Unete a nosotros para alcanzar nuevas alturas"
];

const tittles = [
  "DIPLOMADOS, CURSOS PROMAS",
  "DIPLOMADOS, CURSOS PROMAS",
  "DIPLOMADOS, CURSOS PROMAS"
];

const icons = [
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},
  {img1: <FaFacebookF />, img2: <FaInstagram />, img3: <FaTiktok />, img4: <FaWhatsapp />, img5: <FaYoutube />},

]

const buttons = [
  "Contacto",
  "Informes",
  "¡Inscribete!"
]

const Home = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center lg:px-20 lg:mb-0 mb-20 px-10 lg:mt-20 mt-28 w-full z-[20]"
    >
      <div className="w-full lg:w-1/2 lg:ml-40">
      <AnimatePresence>
        {icons.map((icon, i) => (
          i === index && (
        <motion.div
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromTop}
          className="py-1 lg:text-left text-center px-1 opacity-[0.9]"
        >
          <h1 className="Welcome-text text-gray-100 lg:text-2xl text-2xl text-center inline-flex lg:gap-6 gap-3">
            <Link href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img1}
            </Link>
            <Link href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img2}
            </Link>
            <Link href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img3}
            </Link>
            <Link href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img4}
            </Link>
            <Link href='' className="border border-[#7042f88b] p-2 rounded-full transition-transform transform hover:scale-150 shadow-xl shadow-[#7042f88b]">
              {icon.img5}
            </Link>
          </h1>
        </motion.div>
        )
        ))}
      </AnimatePresence>

        {tittles.map((tittle, i) => (
          i === index && (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-7xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 max-w-[800px] w-auto h-auto"
        >
          {tittle}
        </motion.div>
        )
        ))}

          {texts.map((text, i) => (
            i === index && (
              <motion.p
                key={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={slideInFromLeft(0.8)}
                className="lg:text-3xl text-gray-200 mb-10 max-w-[600px]"
              >
                {text}
              </motion.p>
            )
          ))}

        {buttons.map((button, i) => ( i === index && (
        <motion.a
          key={i}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromLeft(2)}
          className="py-2 lg:text-2xl px-10 font-mono text-center button-primary text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          {button}
        </motion.a>
        )))}
      </div>

      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(1)}
        className="w-full h-full flex justify-center items-center lg:mr-36 mt-10 lg:mt-0"
      >
        <Image
          key={index}
          src={images[index].src}
          alt="icons"
          height={800}
          width={900}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;



 {/* <span>
            Diplomados
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              PROMAS{" "}
            </span>
            Cursos
          </span> */}