import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Appbar, Card, Paragraph, useTheme } from "react-native-paper";
import ImgBackground from "../../components/ImgBackground";
import { ProductoContext } from "../../context/ProductoContext";
import { financial } from "../../util/commo";


export const ProductosScreen = ({ navigation }) => {

  const { producto } = useContext(ProductoContext);

  const { colors } = useTheme();

  return (
    <ImgBackground>
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
                    borderLeftColor: colors.primary,
                    borderLeftWidth: 5,
                  }}
                  mode="elevated"
                  onPress={() => navigation.navigate("ProductoScreen", { item })}>
              <Card.Title title={item.nombre} />
              <Card.Content>
                <Paragraph>Codigo: {item.codigo}</Paragraph>
                <Paragraph>Categotia: {item.categoria}</Paragraph>
                <Paragraph>Unidad: {item.unidadMe}</Paragraph>
                <Paragraph>Precio Venta: {financial(item.precioventa)}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </ImgBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
