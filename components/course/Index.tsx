import Image from 'next/image'
import React from 'react'
import "./Style.css"

const Course = () => {
  return (
    <section className='bg-[#030014]'>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto justify-center items-center gap-10 text-white">

      <div className="lg:w-[400px] w-[300px] h-[420px] bg-transparent cursor-pointer group perspective mt-20">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <Image
              alt="promas"
              src="/course/fertiirrigacion.png"
              width={800}
              height={600}
              className="w-full h-full" />
          </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">Fertirrigación</h1>
            <p className="my-2">9.0 Rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque assumenda saepe animi maxime libero non quasi, odit natus
              veritatis enim culpa nam inventore doloribus quidem temporibus
              amet velit accusamus.
            </p>
            <button
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-[400px] w-[300px] h-[420px] lg:mt-20 md:mt-20 bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <Image
            alt="promas"
            src="/course/monitoreo_calidad_agua.png"
            width={800}
            height={600}
            className="w-full h-full" />
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
        >
          <div
            className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
          >
            <h1 className="text-3xl font-semibold">Monitoreo de la calidad de agua</h1>
            <p className="my-2">9.0 Rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque assumenda saepe animi maxime libero non quasi, odit natus
              veritatis enim culpa nam inventore doloribus quidem temporibus
              amet velit accusamus.
            </p>
            <button
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      className="lg:w-[400px] w-[300px] h-[420px] lg:mt-20 bg-transparent cursor-pointer group perspective"
    >
      <div
        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
      >
        <div className="absolute backface-hidden border-2 w-full h-full">
          <Image
            alt="promas"
            src="/course/costos_presupuestos.png"
            width={800}
            height={600}
            className="w-full h-full" />
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
        >
          <div
            className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
          >
            <h1 className="text-3xl font-semibold">Costos y Presupuestos con S10</h1>
            <p className="my-2">9.0 Rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque assumenda saepe animi maxime libero non quasi, odit natus
              veritatis enim culpa nam inventore doloribus quidem temporibus
              amet velit accusamus.
            </p>
            <button
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      className="lg:w-[400px] w-[300px] h-[420px] mb-20 bg-transparent cursor-pointer group perspective"
    >
      <div
        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
      >
        <div className="absolute backface-hidden border-2 w-full h-full">
          <Image
            alt="promas"
            src="/course/residuos_solidos.png"
            width={800}
            height={600}
            className="w-full h-full" />
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
        >
          <div
            className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
          >
            <h1 className="text-3xl font-semibold">Formulación de proyectos de inversión pública de residuos sólidos</h1>
            <p className="my-2">9.0 Rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque assumenda saepe animi maxime libero non quasi, odit natus
              veritatis enim culpa nam inventore doloribus quidem temporibus
              amet velit accusamus.
            </p>
            <button
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      className="lg:w-[400px] w-[300px] h-[420px] mb-20 bg-transparent cursor-pointer group perspective"
    >
      <div
        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
      >
        <div className="absolute backface-hidden border-2 w-full h-full">
          <Image
            alt="promas"
            src="/course/esquema_FSSC.png"
            width={800}
            height={600}
            className="w-full h-full" />
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
        >
          <div
            className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
          >
            <h1 className="text-3xl font-semibold">Esquema FSSC 22000</h1>
            <p className="my-2">9.0 Rating</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque assumenda saepe animi maxime libero non quasi, odit natus
              veritatis enim culpa nam inventore doloribus quidem temporibus
              amet velit accusamus.
            </p>
            <button
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="lg:w-[400px] w-[300px] h-[420px] mb-20 bg-transparent cursor-pointer group perspective"
    >
      <div
        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
      >
        <div className="absolute backface-hidden border-2 w-full h-full">
          <Image
            alt="promas"
            src="/course/impacto_ambiental.png"
            width={800}
            height={600}
            className="w-full h-full" />
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-pink-600/80 overflow-hidden">
          <div
            className="text-center flex flex-col items-center justify-center h-full text-gray-100 px-2 pb-24">
            <h1 className="text-2xl text-white font-semibold">Identificación y evaluación de Impacto Ambiental</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque assumenda saepe animi maxime libero non quasi, odit natus
              veritatis enim culpa nam inventore doloribus quidem temporibus
              amet velit accusamus.
            </p>
            <button
              className="hover:bg-violet-700 border-violet-700 border px-6 py-1 text-sm font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                Más información
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default Course