import React, { useContext } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Appbar, Card, Paragraph, Title, useTheme } from "react-native-paper";
import { ProductoContext } from "../../context/ProductoContext";
import { financial } from "../../util/commo";


export const ProductosScreen = ({ navigation }) => {

  const { producto } = useContext(ProductoContext);

  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="PRODUCTOS" />
        <Appbar.Action icon="magnify" onPress={() => navigation.navigate("SearchProductoScreen")} />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={producto}
          keyExtractor={(p) => p.idProducto.toString()}
          renderItem={({ item }) => (
            <Card elevation={5}
                  style={{
                    marginVertical: 6,
                    borderLeftWidth: 5,
                    borderLeftColor: colors.primary,
                  }}
                  mode="elevated"
                  onPress={() => navigation.navigate("ProductoScreen", { item })}>
              <Card.Content style={styles.rowView}>
                <View style={{ justifyContent: "space-between" }}>
                  <Title>{item.nombre}</Title>
                  <Paragraph>Codigo: {item.codigo}</Paragraph>
                  <Paragraph>Precio Venta: {financial(item.precioventa)}</Paragraph>
                </View>
                <Image source={{
                  uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                }} style={styles.imagen} />
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagen: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
});
