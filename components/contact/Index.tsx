"use client"
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { TitleText, TypingText } from '../share/CustomText'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
//import ContactImg from '../public/assets/contact.jpg';

const variants = staggerContainer("0.1s", "0.1s");
const Contact = () => {

const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.submit();
    setIsSubmit(true);
  };

  const rowsValue: string = '5';
  const rowsNumber: number = parseInt(rowsValue);
  return (
    <div id='contact' className='w-full text-white bg-[#030014]'>
      <div className='max-w-[1240px] m-auto px-2 py-10 w-full'>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
            <TypingText title="CONTACTANOS" textStyles="text-center" />
        </motion.div>
        <div className='grid lg:grid-cols-5 gap-8 mt-10'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full bg-customPurple/70 shadow-xl rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300 h-80'
                  src="/IMAGEN.png"
                  width={800}
                  height={800}
                  alt='promas'
                  priority={true}
                />
              </div>
              <div>
                <h2 className='py-1 text-xl font-extrabold text-gray-200'>Corporación PROMÁS</h2>
                <p className='py-2 font-semibold text-gray-300'>
                  Somos un Centro de capacitación profesional de amplia experiencia que desarrollamos cursos y diplomados
                  para el sector publico y privado para el fortaleciemiento de sus capacidades
                </p>
              </div>
              <div>
                <p className='uppercase font-bold pt-2'>Contacto</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://www.facebook.com/people/Corporaci%C3%B3n-Prom%C3%A1s/61552473052389/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-customPink p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
                      <FaFacebookF className='text-xl'/>
                    </div>
                  </Link>
                  <Link
                    href='https://www.tiktok.com/@promas.corp'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-customPink p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
                      <FaTiktok className='text-xl'/>
                    </div>
                  </Link>

                  <Link
                    href='https://www.instagram.com/corporacion.promas/'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className='rounded-full shadow-lg shadow-customPink p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
                    <FaInstagram className='text-xl'/>
                  </div>
                  </Link>

                  <Link href='https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados' target='_blank'>
                      <div className='rounded-full shadow-lg shadow-customPink p-6 cursor-pointer hover:scale-125 ease-in duration-300'>
                        <FaWhatsapp className='text-xl'/>
                      </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto bg-customPurple/70 shadow-xl rounded-xl p-4 sm:max-w-[90%] sm:p-2 lg:p-4'>
          <div className='p-4'>
              {!isSubmit ? (
              <form
                action='https://formsubmit.co/ronevanz01@gmail.com'
                method='POST'
                onSubmit={handleSubmit}
                //encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nombres</label>
                    <input
                      className='form-control border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      N° celular
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                      type='text'
                      name='phone'
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                    type='email'
                    name='email'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Asunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-gray-800'
                    type='text'
                    name='asunto'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensaje</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 text-gray-800'
                    rows={rowsNumber}
                    name='message'
                    required
                  ></textarea>
                </div>
                <button type='submit' className='w-full p-4 text-gray-100 border rounded-xl mt-4'>
                  Enviar mensaje
                </button>
                  <input type="hidden" name="_next" value="http://localhost:3000" />
                  <input type="hidden" name="_captcha" value="false" />
              </form>
              ) : (
                <div className="text-center">
                  <p className='text-2xl font-bold mb-4'>!GRACIAS!</p>
                  <p className="text-2xl font-bold text-green-500 mb-4">Datos enviados con éxito</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-center py-6'>
          <Link href='/'>

              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
