import React, { Children } from "react";
import { AsyncStorage } from "react-native";

interface AuthProviderProps {}

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({ user: null, login: () => {}, logout: () => {} });

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<null | { username: string }>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: "Bob" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
