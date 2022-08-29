import React, { useContext } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Card, FAB, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ImgBackground from "../components/ImgBackground";
import { AuthContext } from "../context/AuthContext";

const windowWidth = Dimensions.get("window").width;

const menu = [
  {
    id: 1,
    nombre: "Productos",
    component: "ProductoStack",
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


const TituloHeader = ({ veNombre }) => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Text style={{
        ...styles.title,
        ...styles.globalMargin,
        top: top + 20,
        marginBottom: top + 20,
        paddingBottom: 10,
      }}>CIN</Text>
      <Text style={{
        ...styles.titleUser,
        ...styles.globalMargin,
        top: top + 20,
        marginBottom: top + 20,
        paddingBottom: 10,
      }}>{veNombre}</Text>
    </View>
  );
};

export const HomeScreen = ({ navigation }) => {

  const { user, logOut } = useContext(AuthContext);

  return (
    <ImgBackground>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={menu}
          keyExtractor={(p) => p.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // Header
          ListHeaderComponent={TituloHeader(user)}
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
      <FAB
        icon="location-exit"
        style={styles.fab}
        onPress={logOut}
      />
    </ImgBackground>);
};

const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
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
  titleUser: {
    fontSize: 15,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
