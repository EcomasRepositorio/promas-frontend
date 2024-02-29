"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import axios from 'axios';
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: '',
  password: '',
  role: true,
  token:'',
};

const Login: React.FC = () => {
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState<Auth>(dataForm);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post('https://backend.cimade.edu.pe/api/v1/user/login', form);
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = 'student';
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.error === 'invalid_password') {
          setResErrors({ message: 'Contraseña incorrecta', errorContent: data.errorContent });
        } else if (data.error === 'user_not_found') {
          setResErrors({ message: 'Email no encontrado', errorContent: data.errorContent });
        } else {
          setResErrors({ message: 'Datos incorrectos', errorContent: '' });
        }
      } else {
        setResErrors({ message: 'Error en el servidor', errorContent: '' });
      }
    }
  };
  return (
    <section className="bg-gradient-to-r from-[#c50f9e] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center">
    <div className="max-w-screen-lg bg-white/50 grid lg:grid-cols-2 items-center gap-20 p-5 lg:rounded-2xl mt-10 mb-10">
        <div className="">
            <Image src="/signup-background.svg" alt="" width={400} height={200}/>
            {/* <img src="/teamwork.svg" alt="" className="absolute top-36"/> */}
        </div>

        <div className="max-w-80 grid gap-5">
            <h1 className="text-5xl font-bold text-white">Login</h1>
            <p className="text-[#FFFFFFB3]">Access to 300+ hours of courses, tutorials and livestreams</p>
            <form action="" className="space-y-6 text-white">
            
                <div className="relative">
                    <div className="absolute top-1 left-1 bg-[#FFFFFF40] rounded-full p-2 flex items-center justify-center text-pink-500">
                      <MdOutlineMailLock />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-80 bg-[#FFFFFF30] py-2 px-12 rounded-full focus:bg-[#00000050] focus:outline-none focus:ring-1 focus:ring-pink-600 focus:drop-shadow-lg"
                      onChange={(event) => handleFormData(event, "email")}
                      onKeyDown={handleKeyDown}/>
                      {resErrors?.message === 'Email no encontrado' && (
                <p className="text-red-500 absolute top-[-30px]">{resErrors.errorContent}</p>
              )}
                  </div>
                  
                <div className="relative">
                    <div className="absolute top-1 left-1 bg-[#FFFFFF40] rounded-full p-2 flex items-center justify-center text-pink-500">
                      <RiLockPasswordLine />
                    </div>
                    <input
                      type="text"
                      placeholder="Password"
                      className="w-80 bg-[#FFFFFF30] py-2 px-12 rounded-full focus:bg-[#00000050] focus:outline-none focus:ring-1 focus:ring-pink-600 focus:drop-shadow-lg"
                      onChange={(event) => handleFormData(event, "password")}
                      onKeyDown={handleKeyDown}/>
                      {resErrors?.message === 'Contraseña incorrecta' && (
                <p className="text-red-500 absolute top-[-30px]">{resErrors.errorContent}</p>
              )}
                  </div>
                <button
                  type='button'
                  value='login'
                  className="bg-gradient-to-r from-pink-400 to-pink-300 w-80 font-semibold rounded-full py-2"
                  onClick={() => onSubmit()}>
                    Iniciar sesión
                </button>
            </form>
            {(resErrors?.message === 'Datos incorrectos' || resErrors?.message === 'Error en el servidor') && (
            <p className="text-red-500">{resErrors.errorContent}</p>
          )}
            <div className="text-[#FFFFFFB3] border-t border-[#FFFFFF30] pt-4 space-y-4 text-sm">
                <p>Dont have an account? <a className="text-neon-blue font-semibold cursor-pointer">Sign up</a></p>
                <p>Forgot password? <a className="text-neon-blue font-semibold cursor-pointer">Reset password</a></p>
                <p>Dont have a password yet? <a className="text-neon-blue font-semibold cursor-pointer">Set password</a></p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login