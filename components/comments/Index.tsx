"use client"
import React, { useEffect, useRef } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";
import "./Style.css"

const Comment = () => {
    const activeRef = useRef<number>(2);
    const itemsRef = useRef<NodeListOf<Element> | null>(null);
    const nextRef = useRef<HTMLElement | null>(null);
    const prevRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        itemsRef.current = document.querySelectorAll('.slider .item');
        nextRef.current = document.getElementById('next');
        prevRef.current = document.getElementById('prev');

        const intervalId = setInterval(() => {
          activeRef.current = activeRef.current + 1 < itemsRef.current!.length ? activeRef.current + 1 : 0; // Volver al primer item si se llega al último
          loadShow();
        }, 10000);

        if (itemsRef.current && nextRef.current && prevRef.current) {
            loadShow();


            const isMobile = window.matchMedia('(max-width: 768px)').matches;

            if (isMobile) {
                let startX: number;
                let startY: number;
                let endX: number;
                let endY: number;

                const handleGesture = () => {
                    const deltaX = endX - startX;
                    const deltaY = endY - startY;
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        if (deltaX > 0) {
                            activeRef.current = activeRef.current - 1 >= 0 ? activeRef.current - 1 : activeRef.current;
                            loadShow();
                        } else {
                            activeRef.current = activeRef.current + 1 < itemsRef.current!.length ? activeRef.current + 1 : activeRef.current;
                            loadShow();
                        }
                    }
                };

                document.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                });

                document.addEventListener('touchend', (e) => {
                    endX = e.changedTouches[0].clientX;
                    endY = e.changedTouches[0].clientY;
                    handleGesture();
                });
            } else {
                nextRef.current.onclick = function () {
                    activeRef.current = activeRef.current + 1 < itemsRef.current!.length ? activeRef.current + 1 : activeRef.current;
                    loadShow();
                };
                prevRef.current.onclick = function () {
                    activeRef.current = activeRef.current - 1 >= 0 ? activeRef.current - 1 : activeRef.current;
                    loadShow();
                };
            }
          }
          return () => {
            clearInterval(intervalId);
          };
    }, []);

    function loadShow() {
        if (itemsRef.current) {
            for (let i = 0; i < itemsRef.current.length; i++) {
                const item = itemsRef.current[i] as HTMLElement;
                if (i === activeRef.current) {
                    item.classList.add('center');
                    item.style.transform = 'none';
                    item.style.zIndex = '2';
                    item.style.filter = 'none';
                    item.style.opacity = '1';
                    item.style.display = 'block';
                    item.style.width = '320px';
                    item.style.height = '420px';
                    item.style.setProperty('--scale', '1');
                } else if (i === activeRef.current - 1 || i === activeRef.current + 1 || i === activeRef.current - 2 || i === activeRef.current + 2) {
                    item.style.transform = `translateX(${120 * (i - activeRef.current)}px) scale(1) perspective(16px) perspective(1px)`;
                    item.style.zIndex = '1';
                    item.style.filter = 'blur(5px)';
                    item.style.opacity = '0.6';
                    item.style.display = 'block';
                    item.style.width = '320px';
                    item.style.height = '400px';
                    item.style.setProperty('--scale', '0.9');
                } else {
                    item.style.display = 'none';
                }
            }
        }
    }
  return (
    <section className='relative'>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-80 bg-gray-800" style={{ backgroundImage: "url('/fondo_certificate.jpg')" }}></div>
      <div className='relative z-10 text-white text-center'>
        <h1 className='font-extrabold text-5xl py-10'>Testimonios</h1>
      </div>
    <div className="slider max-w-screen-xl mx-auto">

      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-7xl mb-2'/>
        </div>
        <h1 className='flex justify-center text-lg font-bold mb-5'>Zusethy Gastelo Diaz</h1>
        <p className='italic text-[14px]'>
          "Deseo expresar mi m&aacute;s sincero agradeciemiento a la Corporaci&oacute;n Prom&aacute;s por otorgarme una beca para estudiar en el diplomado sobre Impacto Ambiental
          muchas gracias por brindar sus conocimientos y experiencias, por inspirarnos a alcanzar nuestros objetivos y motivarnos a superar desafios"
        </p>
        <div className='inline-flex text-3xl mt-10 gap-4 text-customPurple'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-7xl mb-2'/>
        </div>
        <h1 className='flex justify-center text-lg font-bold mb-5'>Hervin Huancacuri Tambraico</h1>
        <p className='italic text-[14px]'>
          "En calidad de alumno estoy profundamento agradecido con la Corporaci&oacute;n Prom&aacute;s por el apoyo y la gu&iacute;a que me ha brindado, su enfoque personalizado y su
          compromiso con mi &eacute;xito acad&eacute;mico han sido fundamentales en mi crecimiento personal y profesional"
        </p>
        <div className='inline-flex text-3xl mt-12 gap-4 text-customPurple'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-7xl mb-2'/>
        </div>
        <h1 className='flex justify-center text-lg font-bold mb-5'>Lisbeth Corahua</h1>
        <p className='italic text-[14px]'>
          "Es un honor para m&iacute; expresar mi m&aacute;s sincero agradecimiento a la Corporaci&oacute;n Prom&aacute;s y a la escuela de Postgrado de la Universidad Nacional de Piura,
          por el otorgamiento de una beca, muchas gracias por esta oportunidad que me brindan para asi poder continuar con mis objetivos acad&eacute;micos"
        </p>
        <div className='inline-flex text-3xl mt-10 gap-4 text-customPurple'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-7xl mb-2'/>
        </div>
        <h1 className='flex justify-center text-lg font-bold mb-5'>Elvis Ivan Castañeda Lopez</h1>
        <p className='italic text-[14px]'>
          "Saludos codiales en esta oportunidad quiero agradecer a la Corporaci&oacute;s Prom&aacute;s en compañia con la Universidad Nacional de Piura por haber sido participes en este
          otorgamiento de una beca completa para el diplomado Asistente T&eacute;cnico de Obras, agradecer, ya que forma algo importante en mi vida profesional y que me va a permitir seguir escalando laboralmente"
        </p>
        <div className='inline-flex text-3xl mt-6 gap-4 text-customPurple'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-7xl mb-2'/>
        </div>
        <h1 className='flex justify-center text-lg font-bold mb-5'>Josmell Tornero Huamantico</h1>
        <p className='italic text-[14px]'>
          "Quiero expresar mi sincero agradecimiento a la Corporaci&oacute;n Prom&aacute;s y a la escuela de Postgrado de la Universidad Nacional de Piura por su dedicación incansable para
          asegurarse de que recibamos la mejor educación posible, su dedicación y compromiso con la educación son lo mejor que he visto durante mi proceso academico"
        </p>
        <div className='inline-flex text-3xl mt-7 gap-4 text-customPurple'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-7xl mb-2'/>
        </div>
        <h1 className='flex justify-center text-lg font-bold mb-5'>Roberth Espinoza Piñan</h1>
        <p className='italic text-[14px]'>
          "Quiero expresar mi agradecimiento a la Coporaci&oacute;n Prom&aacute;s y a la escuela de Postgrado de la Universidad Nacional de Piura por permitirme ser parte de esta casa de estudios,
          otorgandome una beca para el diplomado de Riego y Fertirriego la cual me permitira portenciar exponencialmente mis conocimientos"
        </p>
        <div className='inline-flex text-3xl mt-10 gap-4 text-customPurple'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      <div className="item">
        <div className='flex justify-center '>
          <MdPersonPin className='text-7xl mb-2'/>
        </div>
        <h1 className='flex justify-center text-lg font-bold mb-5'>Slider 7</h1>
        <p className='italic text-[14px]'>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
        </p>
        <div className='inline-flex text-3xl mt-12 gap-4 text-customPurple'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      <button id="next"> <AiOutlineRight /> </button>
      <button id="prev"> <AiOutlineLeft /> </button>
    </div>
    </section>
  )
}

export default Comment