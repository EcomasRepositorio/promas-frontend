"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { coursesAlimentary } from "@/components/utils/courses/course";
import { BiChevronDown, BiChevronUp, BiChevronRight} from "react-icons/bi";
import Image from "next/image";


const GraduateAlimentary = () => {
    const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
    const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [coursesAnimated, setCoursesAnimated] = useState<string[]>([]);

   /*  const toggleAccordion2 = () => {
        setIsExpanded(!isExpanded);
    }; */

    /* useEffect(() => {
        if (isAccordionOpen1) {
          setCoursesAnimated(coursesAlimentary);
        } else {
          setCoursesAnimated([]);
        }
      }, [isAccordionOpen1]); */

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
    setIsAccordionOpen2(false); // Cierra el otro elemento si está abierto
  };
  return (
    <div>
       <div className="md:px-20 flex flex-col sm:flex-row justify-center">
          <div className="sm:w-96 mb-4 sm:mb-0">
            <Image
              className="bg-cover h-96 w-96 sm:h-auto rounded-3xl"
              src="/IMAGEN.png"
              alt="icon"
              width={200}
              height={200}
            />
          </div>

          <div className="sm:w-1/2 md:px-20 sm:px-5">
            <div
              className="text-black font-bold font-poppins lg:text-4xl text-4xl my-2 mb-6"
              style={{
                background: `linear-gradient(to right, #002e79, #006eb0)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA
            </div>
            <div className="grid grid-cols-2 text-gray-700 font-montserrat text-sm">
              <div className="flex items-center mb-2">
              <BiChevronRight />
                <p className="font-semibold ml-1">Inicio 25 de febrero</p>
              </div>

              <div className="flex items-center mb-2">
              <BiChevronRight />
                <p className="font-semibold ml-1">Modalidad Online via Zoom</p>
              </div>

              <div className="flex items-center mb-2">
              <BiChevronRight />
                <p className="font-semibold ml-1">4 meses</p>
              </div>

              <div className="flex items-center mb-2">
              <BiChevronRight />
                <p className="font-semibold ml-1">420 horas académicas (<span className="credits">26 créditos</span>)</p>
              </div>
            </div>



            <div className="flex flex-col items-start">
              <Link
                className="border flex items-center justify-center h mb-4 text-gray-700 font-bold rounded-xl p-2 lg:w-6/12 w-full"
                href="https://api.whatsapp.com/send?phone=51900102090"
                target="_blank">
                  <h1 className="transition-transform transform hover:scale-110">Mas información</h1>
              </Link>
              <button
                onClick={toggleAccordion1}
                className="p-2 px-8 border flex items-center justify-between mb-4 text-gray-700 font-bold rounded-xl w-full relative hover:scale-110 duration-700">
                <h1 className="transition-transform transform hover:scale-110">Lista de Módulos</h1>
                {isAccordionOpen1 ? (
                    <BiChevronUp className="text-5xl hover:scale-150 duration-300 absolute top-1/2 right-4 transform -translate-y-1/2" />
                ) : (
                    <BiChevronDown className="text-5xl hover:scale-150 duration-300 absolute top-1/2 right-4 transform -translate-y-1/2" />
                )}
              </button>
            </div>
            {isAccordionOpen1 && (
              <motion.div
                className="bg-white rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.1} }}>
                <div className="text-center text-sm font-sans font-semibold">
                  <ul className="">
                  {coursesAlimentary.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                      className="lg:p-2 p-2 mb-3 border rounded-md bg-slate-50 hover:bg-violet-600 hover:text-gray-100 border-violet-500 hover:scale-110 duration-300 cursor-pointer"
                      style={{ display: 'block', width: '100%' }}
                      onClick={() => window.open(`https://wa.me/51900102090/?text=`, '_blank')}>
                        {item}
                    </motion.li>
                  ))}
                </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
    </div>
  )
}

export default GraduateAlimentary
