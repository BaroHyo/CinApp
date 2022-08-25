import { useEffect, useState } from "react";
import CinApi from "../apis/CinApi";


export const useClienteSearch = () => {

  const [isFetching, setIsFetching] = useState(true);
  const [simpleClienteList, setSimpleClienteList] = useState([]);

  const loadCliente = async () => {
    const resp = await CinApi.get(`/Clientes/ListaClientes/2905`);
    mapClienteList(resp.data.response);
  };

  const mapClienteList = (clienteList) => {
    const newCLienteList = clienteList.map((obj) => {
      return obj;
    });
    setSimpleClienteList(newCLienteList);
    setIsFetching(false);

  };


  useEffect(() => {
    loadCliente();
  }, []);

  return {
    isFetching,
    simpleClienteList,
  };

};
