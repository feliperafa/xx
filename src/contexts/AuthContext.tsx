import { createContext, useState, useEffect, useContext } from "react";
import { AuthContexData, User } from "../types/Types";
import * as auth from "../service/auth";
import api from "../service/Api";
// import ReactLoading from "react-loading";

export const AuthContext = createContext<AuthContexData>({} as AuthContexData);

export const AuthProvider = ({
  //@ts-ignore
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [
    loading,
    // setLoading
  ] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await localStorage.getItem("@FRBSUser:user");
      const storagedToken = await localStorage.getItem("@FRBSToken:token");

      // await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        // setLoading(true);
      }
    }
    loadStorageData();
  }, []);

  async function signInWow() {
    const response = await auth.signin();
    // @ts-ignore
    // loading
    // setLoading(false)
    // const {token, user } = response

    setUser(response.user);

    api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
    // console.log(response)

    await localStorage.setItem("@FRBSUser:user", JSON.stringify(response.user));
    await localStorage.setItem("@FRBSToken:token", response.token);
  }

  async function signOut() {
    await localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signInWow, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
