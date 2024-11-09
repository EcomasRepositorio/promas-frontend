import React, { useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { FaWhatsapp, FaCertificate, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const DashboardSkeleton = dynamic(() => import('@/components/home/skeletons'));

const Curso = ({ curso }) => {
  const [modalOpen, setModalOpen] = useState(false);

  function toRoman(num) {
    const romanNumerals = [
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
    let result = '';
    for (const pair of romanNumerals) {
      while (num >= pair.value) {
        result += pair.numeral;
        num -= pair.value;
      }
    }
    return result;
  }

  const generarEnlaceWhatsapp = (cursoTitulo, modulo) => {
    const mensaje = `Hola, busco información sobre el módulo "${modulo}" del curso "${cursoTitulo}".`;
    return `https://api.whatsapp.com/send?phone=51984040264&text=${encodeURIComponent(mensaje)}&app_absent=0`;
  };

  return (
    <div className="text-[#e91e63] body-font overflow-hidden mb-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <Suspense fallback={<DashboardSkeleton />}>
            <div className="w-full sm:w-80 sm:h-80 lg:w-1/2 lg:h-auto flex-shrink-0">
              <Image
                src={curso.imagen}
                alt="ecommerce"
                width={800}
                height={800}
                className="object-cover object-center rounded-lg"
              />
            </div>
          </Suspense>
          <div className="lg:w-1/2 lg:pl-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-[#e91e63] dark:text-black tracking-widest mt-4 sm:mt-2 md:mt-2 lg:mt-0">{curso.area}</h2>
            <h1 className="text-primaryblue text-3xl title-font font-medium mb-4">{curso.titulo}</h1>
            <Accordion defaultExpandedKeys={["1"]}>
              <AccordionItem key="1" aria-label="Accordion 1" title={<h2 className='text-blackblue dark:text-black'>Detalles y Público Objetivo</h2>}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center mb-2">
                    <Image src="/INICIO.png" alt="icono_promas" width={20} height={20} priority={true} />
                    <p className="font-bold ml-1 text-[#e91e63]">Inscripciones abiertas</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Image src="/MODALIDAD.png" alt="icono_promas" width={20} height={20} priority={true} />
                    <p className="font-bold ml-1 text-[#e91e63]">Modalidad Online via Zoom</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Image src="/DURACION.png" alt="icono_promas" width={20} height={20} priority={true} />
                    <p className="font-bold ml-1 text-[#e91e63]">4 meses</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Image src="/DURACION.png" alt="icono_promas" width={20} height={20} priority={true} />
                    <p className="font-bold ml-1">420 horas académicas (<span className="credits">26 créditos</span>)</p>
                  </div>
                </div>
                <div className="text-gray-800 dark:text-black mt-4">
                  {curso.descripcion}
                </div>
                <div className="mt-4 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
                  <a
                    href="https://wa.me/51984040264?text"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-violet-600 rounded-full flex items-center justify-center px-4 py-2 text-gray-600 font-bold hover:scale-105 duration-300 space-x-2 w-full sm:w-auto"
                  >
                    <FaWhatsapp className="text-green-500" />
                    <span>MÁS INFORMACIÓN</span>
                  </a>
                  <button
                    className="border-2 border-violet-600 rounded-full flex items-center justify-center px-4 py-2 text-gray-600 font-bold hover:scale-105 duration-300 space-x-2 w-full sm:w-auto"
                    onClick={() => setModalOpen(true)}
                  >
                    <FaCertificate className="text-violet-500" />
                    <span>CERTIFICACIÓN</span>
                  </button>
                </div>
              </AccordionItem>

              <AccordionItem key="3" title={<h3 className="text-lg font-medium text-gray-900">Módulos del diplomado</h3>} expandIcon={<FaChevronDown className="text-gray-600 w-6 h-6" />}>
                <ul className="space-y-4">
                  {curso.modulos.map((modulo, moduloIndex) => (
                    <li key={moduloIndex} className="flex items-center justify-between border-2 border-violet-500 rounded-lg py-2 px-4 text-gray-800">
                      <Link href={generarEnlaceWhatsapp(curso.titulo, modulo)} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 w-full">
                        <FaWhatsapp className="text-green-500 w-5 h-5" />
                        <span className="text-lg font-semibold">MÓDULO {toRoman(moduloIndex + 1)}:</span>
                        <span className="text-md">{modulo}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            </Accordion>

            {modalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-4 relative max-w-lg mx-auto">
                  <button
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    onClick={() => setModalOpen(false)}
                  >
                    X
                  </button>
                  <Image src="/cert.webp" alt="Certificado" width={800} height={600} className="object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curso;
