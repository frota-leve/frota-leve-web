import { signInRequest } from "@/services/auth";
import { createContext } from "vm";
import { setCookie } from 'nookies';
import { useState } from "react";
import Router from "next/router";

export const AuthContext = createContext({} as AuthContextType)

export type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
}

type SignInData = {
  email: string;
  password: string
}

type User = {
  name: string;
  email: string;
  businessId: string;
  businessName: string;
}

export function AuthProvider({ children }: any) {
  const [ user, setUser ] = useState<User | null>(null)

  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { token, tokenExpirationAt, user } = await signInRequest({ email, password });

    setCookie(undefined, 'token', token, {
      expires: new Date(tokenExpirationAt)
    })

    setUser(user)

    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}