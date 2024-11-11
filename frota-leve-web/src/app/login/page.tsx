"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const router = useRouter()
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSignIn() {
    setLoading(true)
    await signIn({ email, password: senha })
    setLoading(false)
  }

const handleForgotPassword = () => toast("Fale com o suporte!", { type: 'error' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFC314] to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div className="p-8">
            <div className="mb-8 text-center">
              <Image src="/image/logoAllSemfundo.png" alt="frota leve" width={200} height={200} className="mx-auto" />
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }} className="space-y-6">
              <div className="relative">
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  value={senha}
                  onChange={(s) => setSenha(s.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-400" size={20} />
                  ) : (
                    <Eye className="text-gray-400" size={20} />
                  )}
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black rounded-md py-2 px-4 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  {loading ? <>
                    <div className='flex gap-2 items-center justify-center'>
                      <Loader2 className="animate-spin" />
                      Entrando...
                    </div>
                  </> : <>
                    Entrar
                  </>}
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <div>
             <button className="text-sm hover:underline"  onClick={handleForgotPassword}>Esqueceu a senha?</button>

            </div>
          </div>
      
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}