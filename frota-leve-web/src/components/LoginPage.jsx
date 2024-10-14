// "use client";  // Adicione esta linha no início do arquivo

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// const LoginPage = () => {
//   const router = useRouter();

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async () => {
//     const response = await fetch(`/api/user/${email}`)
//     const responseJson = await response.json();
//     console.log(responseJson)
//     setShowPassword(true)

//   };

//   const savedLogin = async () => {
//     const response = await fetch('/api/auth',
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email,
//           password: senha
//         })
//       }
//     )
//     const responseJson = await response.json();
//     console.log(responseJson.token)
//     router.push('/')

//   }

//   return (
//     <div className='w-full h-full flex'>
//       <div className='w-[60%] bg-[#FFC314]'></div>

//       <div className='w-[40%] bg-white flex items-center justify-center'>
//         <div className='flex flex-col items-center'>
//           {/* div da imagem */}
//           <div className='bg-red-500 flex justify-center'>
//             <Image src="/image/logoC_image.png" alt="frota leve" width={300} height={300} />
//           </div>

//           <div className='w-full flex flex-col'>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email"
//               className='w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
//             />

//             {/* {
//               <input
               
//                 type="password"
//                 placeholder="Senha"
//                 className='w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
//               /> 
//             } */}
//             {
//               showPassword ?
//                 <input
//                   value={senha}
//                   onChange={(s) => setSenha(s.target.value)}
//                   type="password"
//                   placeholder="Senha"
//                   className='w-full text-black py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
//                 /> : ' '

//             }


//           </div>

//           {/* <div className='w-full flex items-center justify-between'>
//             <div className='w-full flex items-center text-[#060606]'>
//               <input type="checkbox" className='w-4 h-4 mr-2' />
//               <p className='text-sm'>Remember me</p>
//             </div>
//             <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-black'>
//               Esqueceu a senha?
//             </p>
//           </div> */}

//           <div className='w-full flex flex-col my-4'>


//             {
//               showPassword ?
//                 <button
//                   className='w-full text-black bg-[#FFC314] rounded-md p-4 text-center flex items-center justify-center'
//                   onClick={savedLogin}
//                 >
//                   Entrar
//                 </button>
//                 :
//                 <button
//                   className='w-full text-black bg-[#FFC314] rounded-md p-4 text-center flex items-center justify-center'
//                   onClick={handleLogin}
//                 >
//                   Acessar
//                 </button>
//             }

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
