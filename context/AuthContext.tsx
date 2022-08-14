import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

import { TokenProps } from "../types/user";

type AuthContextType = {
  authToken: TokenProps;
  setAuthToken: Dispatch<SetStateAction<TokenProps>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<TokenProps>(null);

  useEffect(() => {
    setAuthToken(
      localStorage.getItem("authToken")
        ? JSON.parse(localStorage.getItem("authToken")!)
        : null
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === null)
    throw new Error("useAuthContext must be used within a AuthProvider");
  return context;
};

export { AuthProvider, useAuthContext };
