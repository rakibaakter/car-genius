import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

export const useAuthHook = () => {
  const allAuthInfo = useContext(AuthContext);

  return allAuthInfo;
};
