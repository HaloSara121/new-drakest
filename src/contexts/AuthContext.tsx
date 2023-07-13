import { createContext, ReactNode, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { api } from "@/services/api";

type User = {
  id: number;
  name: string;
  image?: string;
  email: string;
};

interface AuthContextData {
  token: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookie.get("auth-token");

    if (token) {
      setToken(token);
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const token = Cookie.get("auth-token");

    if (token) {
      getUserIdByToken(token);
    }
  }, [token]);

  const getUserIdByToken = async (token: string) => {
    const { data } = await api.get("/auth/validate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      data: { response: user },
    } = await api.get(`/users/${data.userId.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(user);

    setUser({
      id: user.id,
      name: user.name,
      image: user.image,
      email: user.email,
    });
  };

  const signIn = (token: string) => {
    Cookie.set("auth-token", token);
    setToken(token);
  };

  const signOut = () => {
    Cookie.remove("auth-token");
  };

  return (
    <AuthContext.Provider value={{ token, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
