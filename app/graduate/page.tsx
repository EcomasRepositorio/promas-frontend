import GraduateAlimentary from '@/components/graduate/GraduateAlimentary';
import React from 'react'

const Graduate = () => {
  return (
    <section id="/graduate">
      <div className="relative pt-12 lg:pt-40 pb-28 lg:pb-40">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/fondo_certificate.jpg")' }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-60 bg-gray-800"
      ></span>
    </div>
    <div className="relative mx-auto max-w-screen-xl p-2 text-white">
      <h1 className="font-extrabold text-4xl lg:text-6xl">
        Nuestros diplomados
      </h1>
      <p>
        Hola promas
      </p>
      <button className='border px-4 py-1 mt-4 rounded-xl'>
        Contacto
      </button>
    </div>
  </div>
      <div className=" p-5 flex flex-col ">
        <div
          className="text-violet-800 text-center text-3xl lg:text-4xl xl:text-4xl mb-4 font-extrabold">
            DIPLOMADOS EN INGENIERIA CIVIL
        </div>
        <GraduateAlimentary/>
      </div>
    </section>
  )
}

export default Graduate;