import Image from 'next/image';
import React from 'react'

const Login = () => {
  return (
    <div className=' w-full h-full flex' >
      <div className='w-[60%]   bg-yellow-500'></div>

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
      
          </div>
        </div>

      </div>
      
    </div>

  )
}

export default Login;
