"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full lg:bg-purple-700/50 md:bg-purple-700/50 bg-purple-700/95 fixed top-0 left-0 right-0 z-10">
      <div className='max-w-screen-xl flex flex-wrap items-center md:justify-end justify-center mx-auto p-0.5'>
        {/* <div className='hidden md:flex items-center gap-2 text-2xl ml-5'>
          <FaFacebookF className='text-blue-600 transition-transform transform hover:scale-125 border border-transparent rounded p-1 bg-gray-300/50'/>
          <FaInstagram className='text-orange-400 transition-transform transform hover:scale-125 border border-transparent rounded p-1 bg-gray-300/50'/>
          <FaTiktok className='text-black transition-transform transform hover:scale-125 border border-transparent rounded p-1 bg-gray-300/50'/>
          <FaWhatsapp className='text-green-500 transition-transform transform hover:scale-125 border border-transparent rounded p-1 bg-gray-300/50'/>
          <FaYoutube className='text-red-500 transition-transform transform hover:scale-125 border border-transparent rounded p-1 bg-gray-300/50'/>
        </div> */}
        <div className='flex font-semibold w-full border-b border-violet-500 justify-end py-1'>
          <a href='/' className='hover:underline mr-4 text-gray-300 hover:text-white'>Verificar certificado</a>
          <a href='/' className='hover:underline mr-3 text-gray-300 hover:text-white'>Aula Virtual</a>
        </div>
      </div>
        <div className="justify-between px-2 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py- lg:py- md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo_promas.png"
                  width={150}
                  height={80}
                  alt="promas-logo"
                  className=''
                  priority={false}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={40} height={40} alt="logo" className="text-white" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-12 lg:text-sm md:text-sm items-center justify-center md:flex ">
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/certificate" onClick={() => setNavbar(!navbar)}>
                    Certificado
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/graduates" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-bold text-gray-300 hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    ¡Inscribete!
                  </Link>
                </li>
                <li className="text-white hover:text-green-700 py-6 pl-35 lg:pl-20 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-green-600 md:hover:bg-transparent">
                  <button className="bg-green-700 hover:bg-white py-1 px-6 rounded-xl text-base uppercase font-bold">
                    LOGIN
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;