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
  const newProducto = () => {
    try {

    } catch (e) {
      console.error(e.response);
    }
  };

  const updateProducto = () => {
    try {

    } catch (e) {
      console.error(e.response);
    }
  };
  const deleteProducto = () => {
    try {

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
      }}>
      {children}
    </ProductoContext.Provider>
  );
};
