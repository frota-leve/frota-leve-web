import { createContext } from "vm";

export const AuthContext = createContext({} as AuthContextType)

type AuthContextType = {
  isAuthenticated: boolean;
}

export function AuthProvider({ children }: any) {
  const isAuthenticated = false;

  async function singIn() {
    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}