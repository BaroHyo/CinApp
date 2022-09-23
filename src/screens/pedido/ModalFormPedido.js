import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { ClienteContext } from "../../context/ClienteContext";
import LoadingScreen from "../LoadingScreen";
import { Appbar, Card, Paragraph, Title } from "react-native-paper";
import Button from "../../components/Button";

export const ModalFormPedido = ({ navigation }) => {

  const { codigo } = useContext(AuthContext);

  const { clientes, loadCLiente, isLoading } = useContext(ClienteContext);


  useEffect(() => {
    loadCLiente(codigo);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode="small">
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
        <Appbar.Content title="PEDIDOS" />
        <Appbar.Action icon="magnify" onPress={() => navigation.navigate("SearchProductoScreen")} />
      </Appbar.Header>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <FlatList
          data={clientes}
          keyExtractor={(p) => p.prId.toString()}
          renderItem={({ item }) => (
            <Card elevation={3}
                  style={{ marginVertical: 6 }}
                  mode="elevated"
                  onPress={() => navigation.navigate("ProductoPedidoScreen", {
                    id: item.prId,
                    nombre: item.prNombre,
                    codigo: item.prCodigo,
                  })}
            >
              <Card.Content>
                <Title>{item.prNombre}</Title>
                <Paragraph>Direccion: {item.prDireccion}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({},
);
