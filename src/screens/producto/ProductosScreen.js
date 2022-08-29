import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, FAB, Paragraph, Text } from "react-native-paper";
import ImgBackground from "../../components/ImgBackground";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ProductoContext } from "../../context/ProductoContext";
import LoadingScreen from "../LoadingScreen";

export const ProductosScreen = ({ navigation }) => {

  const { isLoading, producto } = useContext(ProductoContext);

  const { top } = useSafeAreaInsets();

  /* if (!isLoading) {
     return <LoadingScreen />;
   }*/

  return (
    <ImgBackground>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <FlatList
          data={producto}
          keyExtractor={(p) => p.idProducto.toString()}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10,
            }}>Productos</Text>
          )}
          renderItem={({ item }) => (
            <Card elevation={3}
                  style={{ marginVertical: 6 }}
                  mode="contained"
                  onPress={
                    () => navigation.navigate("ProductoScreen", {
                      item,
                    })
                  }
            >
              <Card.Title title={item.nombre} />
              <Card.Content>
                <Paragraph>Codigo: {item.codigo}</Paragraph>
                <Paragraph>Categotia: {item.categoria}</Paragraph>
                <Paragraph>Unidad: {item.unidadMe}</Paragraph>
                <Paragraph>Precio Venta: {item.precioventa}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={
            () => navigation.navigate("ProductoScreen")
          }
        />
      </View>
    </ImgBackground>
  );
};
const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
