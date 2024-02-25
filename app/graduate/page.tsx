import GraduateAlimentary from '@/components/graduate/GraduateAlimentary';
import React from 'react'

const Graduate = () => {
  return (
    <section id="/graduate">
      <div className=" p-5 flex flex-col ">
        <div
          className="text text-center text-4xl  lg:text-6xl xl:text-6xl mb-4 font-bold font-poppins "
          style={{
            background: `linear-gradient(to right, #002e79, #006eb0)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DIPLOMADOS EN INGENIERIA CIVIL
        </div>
        <GraduateAlimentary/>
      </div>
    </section>
  )
}

export default Graduate;