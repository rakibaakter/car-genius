import { createContext } from "react";

export const AuthContext = createContext(null);

const authInfo = {
  name: "rakiba",
};

const AuthProvider = (children) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;