import React, { useState, useContext } from "react";
import { localStorageUtil } from "../utils/localStorageUtil";

// The Auth context
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function ProvideAuth({ children }) {
    const [userData, setUserData] = useState(() => localStorageUtil.getItem('data', {}));

    console.log(userData)

    return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>;
  }