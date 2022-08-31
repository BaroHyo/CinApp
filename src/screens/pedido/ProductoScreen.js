import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { Appbar, Card, Divider, Paragraph, Title } from "react-native-paper";
import { ProductoContext } from "../../context/ProductoContext";


export const ProductoScreen = ({ navigation, route }) => {


  const { id, nombre, codigo } = route.params;

  const { producto } = useContext(ProductoContext);

  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Productos" />
        <Appbar.Action icon="cart-outline" onPress={() => navigation.navigate("ResumenScreen")} />
        <Appbar.Action icon="magnify" onPress={() => {
        }} />
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
                  <Image source={{
                    uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                  }} style={styles.avatar} />
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
});
