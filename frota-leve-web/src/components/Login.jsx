import Image from 'next/image';
import React from 'react'

const Login = () => {
  return (
    <div className=' w-full h-full flex' >
      <div className='w-[60%]   bg-[#FFC314]'></div>

      <div className='w-[40%] bg-white flex items-center justify-center' >
        <div className='flex flex-col items-center'>

          {/* div da imagem */}
          <div className='bg-red-500 flex justify-center'>
            <Image src="/image/logoC_image.png" alt="frota leve" width={300} height={300}/>
          </div>

          <div className='w-full flex flex-col'> 
            <input
              type= "email"
              placeholder= "Email"
              className='w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
            />

            <input
              type= "senha"
              placeholder= "Senha"
              className='w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
            />
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center text-[#060606] '>
              <input type="checkbox" className='w-4 h-4 mr-2 ' />
                <p className='text-sm'>Remember me</p>

            </div>
            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-black'> Esqueceu a senha ?</p>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full text-black bg-[#FFC314] rounded-md p-4 text-center flex items-center justify-center'> Entrar</button>


          </div>
        </div>

      </div>
      
    </div>

  )
}

export default Login;
