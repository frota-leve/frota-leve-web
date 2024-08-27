"use client";
import React from 'react';

const Login = () => {

  return (
    <div className='border-2 border-red-500 bg-red-500'>
      <form>
        <input type="text" name="username" placeholder="Nome de usuário" required />
        <input type="password" name="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
