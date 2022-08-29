import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImgBackground from "../../components/ImgBackground";
import { Appbar, Button, TextInput } from "react-native-paper";

export const ProductoScreen = () => {
  return (
    <ImgBackground>
      <View style={{ flex: 1 }}>
        <Appbar.Header elevated>
          <Appbar.Content title="Nuevo Producto" />
        </Appbar.Header>
        <ScrollView style={styles.container}>
          <TextInput
            label="Nombre"
            style={styles.textInput}
          />
          <TextInput
            label="Codigo"
            style={styles.textInput}
          />
          <TextInput
            label="Categoria"
            style={styles.textInput}
          />
          <TextInput
            label="Unidad Medida"
            style={styles.textInput}
          />
          <TextInput
            label="Precio Venta"
            style={styles.textInput}
          />
          <Button icon="check-bold"
                  mode="contained-tonal"
                  onPress={() => console.log('Pressed')}>
            Guardar
          </Button>
        </ScrollView>
      </View>
    </ImgBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});
