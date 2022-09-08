import React, { createContext, useEffect, useState } from "react";
import CinApi from "../apis/CinApi";

export const PedidoContext = createContext({});

export const PedidoProvider = ({ children }) => {

  const [pedido, setPedido] = useState([]);

  // useEffect(() => {
  //   loadPedido();
  // }, []);

  const loadPedido = async () => {
    try {
      const resp = await CinApi.get(`/Pedido/ListaPedidos?idVende=2905&fecha=2022-08-29`);

      setPedido([...resp.data.response]);

    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <PedidoContext.Provider value={{
      pedido,
      loadPedido,
    }}>
      {children}
    </PedidoContext.Provider>
  );
};
