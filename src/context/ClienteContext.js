import React, { createContext, useEffect, useState } from "react";
import CinApi from "../apis/CinApi";

export const ClienteContext = createContext({});

export const ClienteProvider = ({ children }) => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    loadCLiente();
  }, []);

  const loadCLiente = async () => {
    try {
      const resp = await CinApi.get(`/Clientes/ListaClientes/2905`);
      setClientes([...resp.data.response]);

    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <ClienteContext.Provider
      value={{
        clientes,
        loadCLiente,
      }}
    >
      {children}
    </ClienteContext.Provider>
  );

};
