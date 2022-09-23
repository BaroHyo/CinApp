import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { Appbar, Badge, Card, Divider, Paragraph, Title } from "react-native-paper";
import { ProductoContext } from "../../context/ProductoContext";
import { financial } from "../../util/commo";
import { PedidoContext } from "../../context/PedidoContext";


export const ProductoScreen = ({ navigation, route }) => {


  const { id, nombre, codigo } = route.params;

  const { producto } = useContext(ProductoContext);

  const { cantidad } = useContext(PedidoContext);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Productos" />
        <View>
          <Badge size={16}
                 style={styles.badge}
                 visible={cantidad > 0}>
            {cantidad}
          </Badge>
          <Appbar.Action icon="cart-outline" onPress={() => navigation.navigate("ResumenScreen")} />
        </View>
        {/*<Appbar.Action icon="magnify" onPress={() => {   }} />*/}
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={producto}
          keyExtractor={(p) => p.idProducto}
          renderItem={({ item }) => (
            <Card elevation={5}
                  onPress={() => navigation.navigate("FormPedidoScreen", {
                    item,
                    id,
                    nombre,
                    codigo,
                  })}>
              <Card.Content>
                <View style={styles.topContainer}>
                  <View style={{ justifyContent: "space-between" }}>
                    <View>
                      <Title>{item.nombre}</Title>
                      <Paragraph>Codigo: {item.codigo}</Paragraph>
                      <Paragraph>Precio: {financial(item.precioventa)} Bs.</Paragraph>
                    </View>
                  </View>
               
                </View>
              </Card.Content>
            </Card>
          )}
          ItemSeparatorComponent={() => (
            <Divider style={{ marginVertical: 5 }} />
          )}
        />
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },
  chip: {
    margin: 4,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  badge: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});
