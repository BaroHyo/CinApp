import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Platform, StyleSheet, View } from "react-native";
import ImgBackground from "../../components/ImgBackground";
import { Appbar, Card, Paragraph, Searchbar, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useProductoSearch } from "../../hooks/useProductoSearch";
import LoadingScreen from "../LoadingScreen";

const screenWidth = Dimensions.get("window").width;

export const SearchScreen = ({ navigation }) => {

  const { top } = useSafeAreaInsets();

  const { isFetching, simpleProductoList } = useProductoSearch();
  const [productoFiltered, setProductoFiltered] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term.length === 0) {
      return setProductoFiltered([]);
    }
    setProductoFiltered(
      simpleProductoList.filter(
        (pro) => pro.nombre.toLocaleLowerCase()
          .includes(term.toLocaleLowerCase()),
      ),
    );
  }, [term]);

  if (isFetching) {
    return <LoadingScreen />;
  }

  return (
    <ImgBackground>
      <View style={{
        flex: 1,
      }}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        </Appbar.Header>
        <View style={{
          flex: 1,
          marginHorizontal: 5,
        }}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={(value) => setTerm(value)}
            value={term}
            style={{
              position: "absolute",
              zIndex: 999,
              width: screenWidth - 15,
              top: (Platform.OS === "ios") ? top : top + 10,
            }}
          />
          <FlatList
            data={productoFiltered}
            keyExtractor={(p) => p.idProducto.toString()}
            showsVerticalScrollIndicator={false}
            // Header
            ListHeaderComponent={(
              <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                paddingBottom: 10,
                marginTop: (Platform.OS === "ios") ? top + 60 : top + 80,
              }}>{term}</Text>
            )}

            renderItem={({ item }) => (
              <Card elevation={3}
                    style={{ marginVertical: 6 }}
                    mode="contained"
                    onPress={
                      () => navigation.navigate("ProductoScreen", {
                        item,
                      })
                    }>
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
        </View>
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
});
