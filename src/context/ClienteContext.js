import React, { createContext, useEffect, useState } from "react";
import CinApi from "../apis/CinApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ClienteContext = createContext({});

export const ClienteProvider = ({ children }) => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    loadCLiente();
  }, []);

  const loadCLiente = async () => {
    try {
      const codigo = await AsyncStorage.getItem("codigo");

      const resp = await CinApi.get(`/Clientes/ListaClientes/${codigo}`);
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
