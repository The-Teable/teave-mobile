import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { UserProps } from "../types/user";
import jwt_decode from "jwt-decode";

type User = Pick<UserProps, "user_id" | "name" | "tel">;

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const UserContext = createContext<UserContextType | null>(null);

const DEFAULT_USER = {
  user_id: null,
  name: null,
  tel: null,
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(DEFAULT_USER);

  useEffect(() => {
    setUser(
      localStorage.getItem("authToken")
        ? jwt_decode(localStorage.getItem("authToken")!)
        : DEFAULT_USER
    );
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === null)
    throw new Error("useUserContext must be used within a UserProvider");
  return context;
};

export { UserProvider, useUserContext, DEFAULT_USER };
