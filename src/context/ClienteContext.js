import React, { createContext, useState } from "react";
import CinApi from "../apis/CinApi";
import { Alert } from "react-native";

export const ClienteContext = createContext({});

export const ClienteProvider = ({ children }) => {


  const [clientes, setClientes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const loadCLiente = async (codigo) => {
    try {
      setIsLoading(true);
      const resp = await CinApi.get(`/Clientes/ListaClientes/${codigo}`);
      setClientes([...resp.data.response]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", JSON.stringify(error));
    }
  };

  const addCliente = async (body) => {
    try {
      console.log(body);
      const resp = await CinApi.post(`/Clientes/GuardarCliente`, body);
      console.log(resp.data);
    } catch (error) {
      Alert.alert("Error", JSON.stringify(error));
    }
  };

  const updateCliente = async (body) => {
    try {
      const resp = await CinApi.put(`/Clientes/UpdateCliente`, body);
      console.log(resp.data);

    } catch (error) {
      Alert.alert("Error", JSON.stringify(error));

    }
  };

  return (
    <ClienteContext.Provider
      value={{
        clientes,
        loadCLiente,
        isLoading,
        addCliente,
        updateCliente,
      }}
    >
      {children}
    </ClienteContext.Provider>
  );

};
