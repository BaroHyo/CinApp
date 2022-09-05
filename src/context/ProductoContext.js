import React, { createContext, useEffect, useState } from "react";
import CinApi from "../apis/CinApi";

export const ProductoContext = createContext({});

export const ProductoProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);

  const [producto, setProducto] = useState([]);


  useEffect(() => {
    loadProducto();
  }, []);


  const loadProducto = async () => {
    try {
      setIsLoading(false);
      const resp = await CinApi.get(`/Producto/Lista`);
      setProducto([...resp.data.response]);
      setIsLoading(true);
    } catch (e) {
      console.error(e.response);
      setIsLoading(true);
    }
  };
  const loadProductoById = (id) => {
    try {
      setIsLoading(false);

    } catch (e) {
      console.error(e.response);
      setIsLoading(false);

    }
  };
  const addProducto = async (categoria, codigo, nombre, unidadMe, precioventa, precioVenta2) => {
    try {
      const resp = await CinApi.post(`/Producto/Guardar`, {
        idProducto: 0,
        categoria,
        codigo,
        nombre,
        unidadMe,
        precioventa,
        precioVenta2,
      });
      console.log(resp.data);
      setProducto([...producto, {
        idProducto: 0,
        categoria,
        codigo,
        nombre,
        unidadMe,
        precioventa,
        precioVenta2,
      }]);
    } catch (e) {
      console.error(e.response);
    }
  };


  return (
    <ProductoContext.Provider
      value={{
        isLoading,
        producto,
        loadProducto,
        addProducto,
      }}>
      {children}
    </ProductoContext.Provider>
  );
};
