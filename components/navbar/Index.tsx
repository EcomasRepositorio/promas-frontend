"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCog } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [showUnavailableMessage, setShowUnavailableMessage] = useState(false);

  const handleCursosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Evita la navegación
    setShowUnavailableMessage(true); // Muestra el mensaje
    setTimeout(() => {
      setShowUnavailableMessage(false); // Oculta el mensaje después de 2 segundos
    }, 500); // Oculta el mensaje después de 2 segundos
  };

  return (
    <div>
      <div className="w-full lg:bg-purple-700/50 md:bg-purple-700/50 bg-purple-700/95 top-0 left-0 right-0 z-50 absolute">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-0.5 backdrop-blur-md">
          <div className="md:text-right text-center font-semibold w-full border-b border-violet-500 py-1">
            <Link href="/certs" className="hover:underline mr-4 text-white hover:text-white">
              Verificar certificado
            </Link>
            <Link href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3" target="_blank" className="hover:underline mr-3 text-white hover:text-white">
              Aula Virtual
            </Link>
          </div>
        </div>

        <div className="justify-between px-2 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex backdrop-blur-md">
          <div>
            <div className="items-center inline-flex justify-between py-3 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo_promas.png"
                  width={800}
                  height={800}
                  alt="promas-logo"
                  className="w-36 h-10"
                  priority={true}
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden ml-44">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={40} height={40} alt="logo" className="text-white" priority={true} />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                      priority={true}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contenido para dispositivos de escritorio */}
          <div className={`hidden md:block ${navbar ? "block" : "hidden"}`}>
            <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
              <ul className="h-screen md:h-12 lg:text-sm md:text-sm text-xl items-center justify-center md:flex">
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/certs" onClick={() => setNavbar(!navbar)}>
                    Certificado
                  </Link>
                </li>
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/graduate" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>

                {/* Cursos - con mensaje de bloqueo al hacer clic */}
                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125 relative">
                  <Link href="/curs" onClick={handleCursosClick}>
                    Cursos
                  </Link>
                  {showUnavailableMessage && (
                    <div className="absolute top-12 text-red-500 bg-transparent px-2 py-1 rounded shadow-md">
                      Aún no disponible
                    </div>
                  )}
                </li>

                <li className="font-bold text-gray-100 hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-violet-800 rounded transition-transform transform hover:scale-125">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>

                <li className="lg:pl-40 flex justify-center items-center hover:text-pink-600 md:mt-0 mt-20">
                  <Link href="/login" className="bg-pink-600 py-1 px-4 rounded-xl text-white hover:bg-gray-100 hover:text-pink-600 hover:scale-125 duration-300">
                    <FaUserCog className="md:text-xl text-4xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
