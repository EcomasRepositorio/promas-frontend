"use client"
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (inView) {
      setStart(end); // Inicia desde el valor actual
      setEnd(end + 1); // Aumenta en uno para reiniciar el contador
    }
  }, [inView, end])

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
          <div ref={ref} className={`flex justify-center items-center flex-col lg:border-0 border-b-2 mt-5`}>
            <Image
              src="/estudiantes.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
              {inView && <><span className="text-2xl">+</span><CountUp start={0} end={10000} duration={5} separator="." /> alumnos confiaron en nosotros</>}
              </h1>
          </div>
          <div ref={ref} className={`flex justify-center items-center flex-col lg:border-0 border-b-2 mt-5`}>
            <Image
              src="/certificados.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
              {inView && <><span className="text-2xl">+</span><CountUp start={0} end={70} duration={5} separator="." /> diplomados disponibles</>}
              </h1>
          </div>
          <div ref={ref} className={`flex justify-center items-center flex-col lg:border-0 border-b-2 mt-5`}>
            <Image
              src="/metologia.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
                Contenidos de alta calidad
              </h1>
          </div>
          <div ref={ref} className={`flex justify-center items-center flex-col mt-5`}>
            <Image
              src="/enseñanza.png"
              alt="alumnos"
              width={150}
              height={150}/>
              <h1 className='text-white mt-5 mb-5'>
              {inView && <><span className="text-2xl">+</span><CountUp start={0} end={700} duration={5} separator="." /> cursos a su disposición</>}
              </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter