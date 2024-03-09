import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./Styles.css";

const Whatsapp = () => {
  return (
  <section>
    <div className='container-redes z-50'>
    <div className='ml-[204px]'>
    <Link href="http://m.me/Corporación-Promás" target='_blank'>
      <Image
        src="/messenger.png"
        alt="messenger"
        width={60}
        height={60}
        className='hover:scale-125 duration-300'/>
    </Link>
    </div>
    <div className='flex items-end'>
      <p className='text-white text-xs font-semibold p-2 bg-customPink rounded-xl lg:mb-5 mb-2 order-first'>
        Hola, como podemos ayudarte...
      </p>
    <Link href="https://wa.me/51984040264?text=Hola,%20deseo%20más%20información%20sobre%20los%20diplomados" className='' target='_blank'>
      <Image
        src="/whatsapp.png"
        alt="whatsAap"
        width={60}
        height={60}
        className='mt-3 ml-0.5 lg:mb-3 hover:scale-125 duration-300'/>
    </Link>
    </div>
    </div>
  </section>
  )
}

export default Whatsapp;