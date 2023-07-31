import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  singIn: (email: string, password: string) => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContexts = createContext<AuthContextDataProps>({} as AuthContextDataProps);


export function AuthContextsProvider ({children}:AuthContextProviderProps ) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function singIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      if(data.user) {
        setUser(data.user);
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContexts.Provider value={{user, singIn}}>
    {children}
  </AuthContexts.Provider>
  );
}
 