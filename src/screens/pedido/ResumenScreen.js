import React, { useContext, useState, useCallback } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { PedidoContext } from "../../context/PedidoContext";
import { Appbar, Button, Card, Title, useTheme } from "react-native-paper";
import TextInput from "../../components/TextInput";


export const ResumenScreen = ({ navigation }) => {

  const [inputDate, setInputDate] = useState(new Date());
  const { detalle } = useContext(PedidoContext);
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Resumen" />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          label="NOMBRE"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          autoCapitalize={"characters"}
        />
        <TextInput
          label="NIT"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          autoCapitalize={"characters"}
        />
        <TextInput
          multiline
          numberOfLines={4}
          mode="outlined"
          label="DETALLE"
        />
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <FlatList
          data={detalle}
          keyExtractor={(p) => p.deId.toString()}
          renderItem={({ item }) => (
            <Card elevation={3}
                  style={{ marginVertical: 6 }}
                  mode="elevated">
              <Card.Title title={item.deNombre} />
              <Card.Content>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                  <Image source={{
                    uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                  }} style={styles.avatar} />
                  <View style={{ justifyContent: "flex-start" }}>
                    <Title>Cantidad: {item.totalCantidad}</Title>
                    <Title>{item.dePrecioT} Bs.</Title>
                  </View>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </View>
      <View style={styles.viewFooter}>
        <Button style={styles.button}
                mode="contained"
                onPress={() => console.log(1)}>
          AGREGAR
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  viewFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "75%",
  },
  textInput: {
    marginVertical: 1,
  },
  fechaContenedor: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
});
