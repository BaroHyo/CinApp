import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Paragraph, Text } from "react-native-paper";
import ImgBackground from "../components/ImgBackground";
import { ClienteContext } from "../context/ClienteContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ClientesScreen = () => {

  const { clientes } = useContext(ClienteContext);

  const { top } = useSafeAreaInsets();

  return (
    <ImgBackground>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <FlatList
          data={clientes}
          keyExtractor={(p) => p.prId.toString()}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10
            }}>Clientes</Text>
          )}
          renderItem={({ item }) => (
            <Card elevation={3}
                  style={{ marginVertical: 6 }}
                  mode="contained">
              <Card.Title title={item.prNombre} />
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
    marginHorizontal: 20
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default ClientesScreen;