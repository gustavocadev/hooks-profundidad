import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Message from './Message';
import { useForm } from '../hooks/useForm';

type Props = {};
const FormWithCustomHook = (props: Props) => {
  const {
    formState,
    handleInputChange,
    email,
    password,
    username,
    onResetForm,
  } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <div>
      <h1>Formulario simple</h1>
      <hr />

      <form className="px-10 mt-2">
        <input
          type="text"
          className="bg-gray-900 p-2 rounded w-full text-white text-xl"
          placeholder="Ingresa tu username"
          name="username"
          autoComplete="off"
          onChange={handleInputChange}
          value={username}
        />

        <input
          type="email"
          className="p-2 bg-gray-900 rounded w-full text-white mt-2 text-xl"
          name="email"
          placeholder="Ingresa tu email"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />

        <input
          type="password"
          className="p-2 bg-gray-900 rounded w-full text-white mt-2 text-xl"
          name="password"
          placeholder="Contraseña"
          autoComplete="off"
          onChange={handleInputChange}
          value={password}
        />
      </form>
      <button className="" onClick={() => onResetForm()}>
        Borrar
      </button>
    </div>
  );
};
export default FormWithCustomHook;
