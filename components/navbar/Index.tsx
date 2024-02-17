"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-purple-700 dark:border-gray-700">
      <div className='max-w-screen-xl flex flex-wrap items-center md:justify-between justify-center mx-auto p-1'>
        <div className='hidden md:flex items-center gap-6 text-xl ml-5'>
          <FaFacebookSquare className='text-blue-600 transition-transform transform hover:scale-150 hover:pulse'/>
          <FaInstagram className='text-orange-400 transition-transform transform hover:scale-150'/>
          <FaTiktok className='transition-transform transform hover:scale-150'/>
          <FaWhatsapp className='text-green-500 transition-transform transform hover:scale-150'/>
        </div>
        <div className='font-semibold'>
          <a href='#' className='hover:underline mr-4 text-gray-300 hover:text-white'>Verificar certificado</a>
          <a href='#' className='hover:underline mr-3 text-gray-300 hover:text-white'>Aula Virtual</a>
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" width={50} height={50} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PROMAS</span>
        </a>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded={menuOpen}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:w-auto md:flex items-center lg:justify-between justify-center ${menuOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-purple-700 dark:border-gray-700">
            <li>
            <a href="#" className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-violet-800 rounded">
            Inicio</a>
          </li>
          <li>
            <button onClick={toggleMenu} className="flex items-center justify-between text-gray-200 hover:text-white w-full py-2 px-3 rounded hover:bg-violet-800">
              Diplomados
              <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-violet-800">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-violet-800">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-violet-800">Earnings</a>
                </li>
              </ul>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-300 hover:text-white rounded hover:bg-violet-800">Certificados</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-300 hover:text-white rounded hover:bg-violet-800">Nosotros</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-300 hover:text-white rounded hover:bg-violet-800">¡Inscribete!</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;