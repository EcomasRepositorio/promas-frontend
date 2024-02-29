/* import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importa los íconos necesarios

interface PasswordInputProps {
  label: string;
  name: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label>{label}:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        name={name}
        className="border rounded-lg p-2 w-full"
      />
      <button
        type="button"
        className="absolute text-lg top-2 right-1 px-3 py-4"
        onClick={toggleShowPassword}
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
 */

import React, { ChangeEvent, KeyboardEvent } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { UseFormRegister } from 'react-hook-form';

interface PasswordInputProps {
  name: string;
  register: UseFormRegister<any>; // Ajusta el tipo según tu formulario principal
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Agrega onChange a las propiedades
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, register, placeholder, onChange, onKeyDown }) => {
  return (
    <div className="relative">
      <input
        type="password"
        placeholder={placeholder}
        {...register(name)} // Usa el register de RHF para manejar el campo
        onChange={onChange} // Usa onChange aquí
        onKeyDown={onKeyDown} // Usa onKeyDown aquí
        className="w-80 bg-[#FFFFFF30] py-2 px-12 rounded-full focus:bg-[#00000050] focus:outline-none focus:ring-1 focus:ring-pink-600 focus:drop-shadow-lg"
      />
    </div>
  );
};

export default PasswordInput;