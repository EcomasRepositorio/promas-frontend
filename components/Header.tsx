"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { BiHomeHeart } from 'react-icons/bi'
import { MdMiscellaneousServices, MdOutlineConnectWithoutContact } from 'react-icons/md'
import { FaFacebookSquare, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg'

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full lg:bg-cyan-700/50 bg-cyan-700/95 fixed top-0 left-0 right-0 z-10">
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
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="#home">
                <Image
                  src="/logo_promas.png"
                  width={80}
                  height={80}
                  alt="metalurgica-logo"
                  className='lg:w-36 w-32'
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
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <BiHomeHeart className='text-xl text-white'/>
                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 text-center border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                  <MdMiscellaneousServices className='text-xl text-white'/>
                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#services" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                  <CgProfile className='text-xl text-white'/>
                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                  <MdOutlineConnectWithoutContact className='text-xl text-white'/>
                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
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

export default Header;