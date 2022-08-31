import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Appbar, Button, Card, Paragraph } from "react-native-paper";
import { ClienteContext } from "../../context/ClienteContext";

export const PedidoScreen = ({ navigation }) => {

  const { clientes } = useContext(ClienteContext);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => navigation.goBack()} />
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
                  mode="elevated">
              <Card.Title title={item.prNombre} />
              <Card.Content>
                <Paragraph>Codigo: {item.prCodigo}</Paragraph>
                <Paragraph>Direccion: {item.prDireccion}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => navigation.navigate("VisitaScreen")}>Visita</Button>
                <Button onPress={() => navigation.navigate("ProductoPedidoScreen", {
                  id: item.prId,
                  nombre: item.prNombre,
                  codigo: item.prCodigo,
                })}>Productos</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
    </View>
  );
};
