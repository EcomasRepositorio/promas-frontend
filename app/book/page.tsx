"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiWorld } from "react-icons/bi";
import { HiIdentification } from "react-icons/hi2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { BsFillHouseUpFill, BsBank2, BsFillEnvelopeAtFill, BsBuildingsFill, BsFillPersonBadgeFill, BsFillTelephoneFill } from "react-icons/bs";

const Book = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [reclamoChecked, setReclamoChecked] = useState(false);
  const [sugerenciaChecked, setSugerenciaChecked] = useState(false);

  const handleReclamoChange = () => {
    setReclamoChecked(!reclamoChecked);
    setSugerenciaChecked(false);
  };

  const handleSugerenciaChange = () => {
    setSugerenciaChecked(!sugerenciaChecked);
    setReclamoChecked(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <section className='mt-28'>
      <div className='max-w-screen-lg mx-auto'>
      <div className='p-2'>
        <h1 className='uppercase text-gray-600 p-4 text-center text-2xl font-extrabold'>Hoja de Reclamación</h1>
        <p></p>
        <h2 className='bg-pink-600 p-3 text-lg font-semibold text-gray-200 rounded-xl'>Identificación del consumidor</h2>
      </div>
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
        <div className='text-gray-500 md:mt-4'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Apellido paterno:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <FaUserPlus />
            </div>
          <input
            type="text" {...register('apellidop', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
          </div>
          </div>

          <div className='text-gray-500 md:mt-4'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Apellido materno:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <FaUserPlus />
            </div>
          <input
            type="text" {...register('apellidom', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Nombres:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsFillPersonBadgeFill />
            </div>
          <input
            type="text" {...register('nombres', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
          {errors.nombre?.type === 'required' && <p>Elcampo nombre es obligatorio</p>}
          {errors.nombre?.type === 'maxLength' && <p>Elcampo nombre debe contener menos de 20 caracteres</p>}
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Teléfono:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsFillTelephoneFill />
            </div>
          <input
            type="text" {...register('telefono', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Tipo de documento:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <PiIdentificationBadgeFill />
            </div>
          <select {...register('documento', { required: true })}
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5">
            <option value="dni">DNI</option>
            <option value="ce">Carnet de extranjeria</option>
            <option value="pass">Pasaporte</option>
          </select>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              N° de documento:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <HiIdentification />
            </div>
          <input
            type="text" {...register('dni', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Departamento:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <SiHomeassistantcommunitystore />
          </div>
          <input
            type="text" {...register('departamento', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Provincia:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <BsBank2 />
          </div>
          <input
            type="text" {...register('provincia', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Distrito:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsBuildingsFill />
            </div>
          <input
            type="text" {...register('distrito', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Dirección:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BsFillHouseUpFill />
            </div>
          <input
            type="text" {...register('direccion', { required: true })}
            id='name'
            autoFocus
            className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-gray-500'>
        <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Email:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
              <BsFillEnvelopeAtFill />
            </div>
            <input
              type="text" {...register('email', { required: true })}
              id='name'
              autoFocus
              className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
          </div>
        </div>

          <div className='text-gray-500 mb-6'>
          <label
            className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Pais:
          </label>
          <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <BiWorld />
          </div>
            <select {...register('pais', { required: true })}
              className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5">
              <option value="ar">Argentina</option>
              <option value="pe">Perú</option>
              <option value="bo">Bolivia</option>
              <option value="ec">Ecuador</option>
              <option value="co">Colombia</option>
              <option value="ve">Venezuela</option>
              <option value="ch">Chile</option>
            </select>
        </div>
        </div>

      <div className='md:col-span-2'>
        <h2 className='bg-pink-600 p-3 text-lg font-semibold text-gray-200 rounded-xl'>Detalle de la reclamación y pedido del consumidor</h2>

        <div className='grid grid-cols-2 gap-4 mt-8 mb-6 p-3'>
        <div className="flex items-center me-4">
          <input
            id="purple-checkbox-reclamo"
            type="checkbox"
            checked={reclamoChecked}
            onChange={handleReclamoChange}
            className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="purple-checkbox-reclamo" className="ms-2 font-bold text-gray-600">Reclamo</label>
        </div>
        <div className="flex items-center me-4">
          <input
            id="purple-checkbox-sugerencia"
            type="checkbox"
            checked={sugerenciaChecked}
            onChange={handleSugerenciaChange}
            className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="purple-checkbox-sugerencia" className="ms-2 font-bold text-gray-600">Sugerencia</label>
        </div>
      </div>

      <label className='font-bold absolute text-gray-600 text-lg duration-500 scale-75 origin-[0]'>
        Mensaje:
      </label>
      <div className='relative'>
        <textarea
          id="message"
          rows={10}
          className="block mt-12 p-2.5 w-full text-gray-900 bg-gray-100 rounded-lg border-2 border-gray-300"
          placeholder={reclamoChecked ? "Mensaje de reclamo" : sugerenciaChecked ? "Mensaje de sugerencia" : "Mensaje"}
        >
        </textarea>
      </div>
      </div>
        <input type="submit" value="Enviar" className='border-2 p-2 mb-6 rounded-xl bg-pink-600 text-gray-200 text-xl font-bold cursor-pointer'/>
      </form>
      </div>
    </section>
  )
}

export default Book