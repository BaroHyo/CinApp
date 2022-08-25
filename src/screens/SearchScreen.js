import React, { useEffect, useState } from "react";
import { View, Platform, Dimensions, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ImgBackground from "../components/ImgBackground";
import { Card, Paragraph, Searchbar, Text } from "react-native-paper";
import { useClienteSearch } from "../hooks/useClienteSearch";
import LoadingScreen from "./LoadingScreen";

const screenWidth = Dimensions.get("window").width;

export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simpleClienteList } = useClienteSearch();
  const [clienteFiltered, setClienteFiltered] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {

    if (term.length === 0) {
      return setClienteFiltered([]);
    }

    setClienteFiltered(
      simpleClienteList.filter(
        (cli) => cli.prNombre.toLocaleLowerCase()
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
        marginHorizontal: 20,
      }}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={(value) => setTerm(value)}
          value={term}
          style={{
            position: "absolute",
            zIndex: 999,
            width: screenWidth - 40,
            top: (Platform.OS === "ios") ? top : top + 30,
          }}
        />
        <FlatList
          data={clienteFiltered}
          keyExtractor={(p) => p.prId.toString()}
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
    marginHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
