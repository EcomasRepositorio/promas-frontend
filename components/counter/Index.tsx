"use client"
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import CountUp from 'react-countup';

const Counter = () => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section className='mt-20 bg-pink-600/50'>
      <div className='p-10 max-w-screen-xl mx-auto'>
        <h1 className=' text-5xl font-extrabold text-white text-center '>
          ¿Por que Promas?
        </h1>
        <h3 className='text-white mt-10 mb-20 font-semibold lg:text-xl text-sm text-center lg:px-60'>
          Porque impulsamos el desarrollo creativo de todo profesional a través de nuestros cursos y
          diplomados, apostando por una formación con pensamiento estratégico e innovador
        </h3>
        <div className='grid lg:grid-cols-4 bord text-center'>
          <div ref={counterRef}
            className={`flex justify-center items-center flex-col lg:border-0 border-b-2 mt-5 ${
              isVisible ? 'animate-counter' : ''
            }`}>
            <Image
              src="/estudiantes.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
              <h1 className=''>+10.000 alumnos confiaron en nosotros</h1>
              </h1>
          </div>
          <div className='flex justify-center items-center flex-col lg:border-0 border-b-2 mt-5'>
            <Image
              src="/certificados.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
              <span className="text-2xl">+</span><CountUp start={0} end={70} duration={5} separator="." /> diplomados disponibles
              </h1>
          </div>
          <div className='flex justify-center items-center flex-col lg:border-0 border-b-2 mt-5'>
            <Image
              src="/metologia.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
                Contenidos de alta calidad
              </h1>
          </div>
          <div className='flex justify-center items-center flex-col mt-5'>
            <Image
              src="/enseñanza.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
              <span className="text-2xl">+</span><CountUp start={0} end={700} duration={5} separator="." /> cursos a su disposición
              </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter