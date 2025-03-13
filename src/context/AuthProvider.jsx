import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext();
import { fetchData } from "../utills/rapidApi";
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("new");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);
  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then((contents) => {
      setData(contents?.contents);
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
