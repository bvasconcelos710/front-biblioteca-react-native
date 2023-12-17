import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../../api/api";

interface IContext {
  tokenState: string | null;
  userId: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IContext);

interface AuthProviderContextProps {
  children: React.ReactNode;
}

export function AuthProviderContext({ children }: AuthProviderContextProps) {
  const [tokenState, setTokenState] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  async function login(username: string, password: string) {
    const dados = {
      email: username,
      senha: password,
    };
    try {
      const response = await api.post("/usuarios/login", dados);
      const { token, userId } = response.data as { token: string; userId: string; };
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem("auth.token", token);
      setTokenState(token);
      setUserId(userId);
    } catch (error) {
      console.log("Error aqui", error);
    }
  }

  async function logout() {
    setTokenState(null);
    await AsyncStorage.removeItem("auth.token");
  }

  useEffect(() => {
    async function loadStorage() {
      const tokenStorage = await AsyncStorage.getItem("auth.token");
      if (tokenStorage) {
        api.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
        setTokenState(tokenStorage);
      }
    }
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ tokenState, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
