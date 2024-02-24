"use client"
import React, { useEffect, useRef } from 'react'
import "./Style.css"

const Comment = () => {
    const activeRef = useRef<number>(2); // El elemento central será el índice 2
    const itemsRef = useRef<NodeListOf<Element> | null>(null);
    const nextRef = useRef<HTMLElement | null>(null);
    const prevRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        itemsRef.current = document.querySelectorAll('.slider .item');
        nextRef.current = document.getElementById('next');
        prevRef.current = document.getElementById('prev');

        if (itemsRef.current && nextRef.current && prevRef.current) {
            loadShow();
            nextRef.current.onclick = function () {
                activeRef.current = activeRef.current + 1 < itemsRef.current!.length ? activeRef.current + 1 : activeRef.current;
                loadShow();
            };
            prevRef.current.onclick = function () {
                activeRef.current = activeRef.current - 1 >= 0 ? activeRef.current - 1 : activeRef.current;
                loadShow();
            };
        }
    }, []);

    function loadShow() {
        if (itemsRef.current) {
            for (let i = 0; i < itemsRef.current.length; i++) {
                const item = itemsRef.current[i] as HTMLElement;
                if (i === activeRef.current) {
                    item.classList.add('center');
                    item.style.transform = 'none';
                    item.style.zIndex = '2';
                    item.style.filter = 'none';
                    item.style.opacity = '1';
                    item.style.display = 'block';
                    item.style.width = '300px'; // Ajustar el ancho del elemento central
                    item.style.setProperty('--scale', '1');
                } else if (i === activeRef.current - 1 || i === activeRef.current + 1 || i === activeRef.current - 2 || i === activeRef.current + 2) {
                    //const direction = i < activeRef.current ? -1 : 1;
                    item.style.transform = `translateX(${120 * (i - activeRef.current)}px) scale(1) perspective(16px) rotateY(-1deg)`;
                    item.style.zIndex = '1';
                    item.style.filter = 'blur(5px)';
                    item.style.opacity = '0.6';
                    item.style.display = 'block';
                    item.style.width = '300px'; // Ajustar el ancho del elemento central
                    item.style.setProperty('--scale', '0.9');
                } else {
                    item.style.display = 'none';
                }
            }
        }
    }
  return (
    <section className="slider mt-20 max-h-screen">
      <div className="item">
        <h1>Slider 1</h1>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
      </div>
      <div className="item">
        <h1>Slider 2</h1>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
      </div>
      <div className="item">
        <h1>Slider 3</h1>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
      </div>
      <div className="item">
        <h1>Slider 4</h1>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
      </div>
      <div className="item">
        <h1>Slider 5</h1>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
      </div>
      <div className="item">
        <h1>Slider 6</h1>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
      </div>
      <div className="item">
        <h1>Slider 7</h1>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
      </div>
      <button id="next"> n </button>
      <button id="prev"> p </button>
    </section>
  )
}

export default Comment