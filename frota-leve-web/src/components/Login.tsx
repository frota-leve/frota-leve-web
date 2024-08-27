// src/components/Login.tsx
"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Submit login credentials to your backend
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-r from-yellow-500 to-yellow-300"></div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt="Frota Leve Logo" width={200} height={100} />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Frota Leve</h2>
          <p className="text-gray-500">Inovação que flui</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 text-lg border rounded w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 text-lg border rounded w-full"
              required
            />
          </div>
          <a href="#" className="text-sm text-gray-500 mb-6 self-end">Esqueceu a senha?</a>
          <button
            type="submit"
            className="p-3 text-lg rounded bg-yellow-500 text-white font-bold w-full"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};


export default Login;