import React, { createContext, useState } from "react";
import CinApi from "../apis/CinApi";

export const PedidoContext = createContext({});

export const PedidoProvider = ({ children }) => {

  const [pedido, setPedido] = useState([]);

  const [cantidad, setCantidad] = useState(0);

  const [detalle, setDetalle] = useState([]);


  const loadPedido = async (codigo, fecha) => {
    try {
      console.log(fecha);
      const resp = await CinApi.get(`/Pedido/ListaPedidos?idVende=${codigo}&fecha=${fecha}`);
      setPedido([...resp.data.response]);
    } catch (error) {
      console.log(error.response);
    }
  };


  return (
    <PedidoContext.Provider value={{
      cantidad,
      setCantidad,
      pedido,
      detalle,
      setDetalle,
      loadPedido,
    }}>
      {children}
    </PedidoContext.Provider>
  );
};
