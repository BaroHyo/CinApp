import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ImgBackground from "../components/ImgBackground";

const windowWidth = Dimensions.get("window").width;

const menu = [
  {
    id: 1,
    nombre: "Productos",
    component: "TabProducto",
    icon: "",
  },
  {
    id: 2,
    nombre: "Clientes",
    component: "TabCliente",
    icon: "",
  },
  {
    id: 3,
    nombre: "Pedidos",
    component: "",
    icon: "",
  },
  {
    id: 4,
    nombre: "Registrados",
    component: "",
    icon: "",
  },
  {
    id: 5,
    nombre: "Visita",
    component: "",
    icon: "",
  },
  {
    id: 6,
    nombre: "Mapa Gps",
    component: "MapaScreen",
    icon: "",
  },
];

export const HomeScreen = ({ navigation }) => {

  const { top } = useSafeAreaInsets();

  return (
    <ImgBackground>
      <View style={{
        alignItems: "center",
        top: top + 8,
        marginBottom: top + 8,
        paddingBottom: 5,
      }}>
        <FlatList
          data={menu}
          keyExtractor={(p) => p.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // Header
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: 20,
              marginBottom: 20,
              paddingBottom: 10,
            }}>CIN</Text>
          )}
          renderItem={({ item }) => (
            <Card style={{
              ...styles.container,
              width: windowWidth * 0.4,
            }}
                  mode="contained"
                  onPress={() => navigation.navigate(item.component)}>
              <Card.Title title={item.nombre} />
              <Card.Content style={{ flex: 1, flexDirection: "row-reverse" }}>

              </Card.Content>
            </Card>
          )}
          onEndReachedThreshold={0.4}
        />
      </View>
    </ImgBackground>);
};

const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokebolaBG: {
    position: "absolute",
    width: 300,
    height: 300,
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  container: {
    marginHorizontal: 15,
    height: 130,
    width: 170,
    marginBottom: 25,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    left: 10,
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
});
