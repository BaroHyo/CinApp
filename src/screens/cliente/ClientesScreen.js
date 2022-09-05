import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Appbar, Card, FAB, Paragraph, useTheme } from "react-native-paper";
import ImgBackground from "../../components/ImgBackground";
import { ClienteContext } from "../../context/ClienteContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const ClientesScreen = ({ navigation }) => {

  const { clientes } = useContext(ClienteContext);

  const { colors } = useTheme();


  return (
    <ImgBackground>
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="CLIENTES" />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={clientes}
          keyExtractor={(p) => p.prId.toString()}
          renderItem={({ item }) => (
            <Card elevation={5}
                  style={{
                    marginVertical: 6,
                    borderLeftColor: colors.primary,
                    borderLeftWidth: 5,
                  }}
                  mode="elevated"
                  onPress={() => navigation.navigate("ClienteScreen", { item })}>
              <Card.Title title={item.prNombre} left={({ size }) => (
                <MaterialCommunityIcons
                  name={item.prLat === 0 ? "map-marker-remove-variant" : "map-marker-radius"}
                  color={item.prLat === 0 ? colors.error : colors.secondary}
                  size={size} />
              )} />
              <Card.Content>
                <Paragraph>Codigo: {item.prCodigo}</Paragraph>
                <Paragraph>Direccion: {item.prDireccion}</Paragraph>
                <Paragraph>Celular: {item.prCelular}</Paragraph>
                <Paragraph>Razon Social: {item.prNombrefa}</Paragraph>
                <Paragraph>Nit: {item.prNitfa}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
        <FAB
          icon="plus"
          style={{ ...styles.fab, backgroundColor: colors.primary }}
          onPress={() => console.log("Pressed")}
        />
      </View>
    </ImgBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
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
