import React, { useContext } from "react";
import { Keyboard, ScrollView, StyleSheet, View } from "react-native";
import ImgBackground from "../../components/ImgBackground";
import { Appbar, Button, TextInput, useTheme } from "react-native-paper";
import { useForm } from "../../hooks/useForm";
import { ProductoContext } from "../../context/ProductoContext";

export const ModalProducto = ({ navigation }) => {

  const { colors } = useTheme();
  const { addProducto } = useContext(ProductoContext);

  const {
    categoria,
    codigo,
    nombre,
    unidadMe,
    precioventa,
    precioVenta2,
    onChange,
  } = useForm({
    categoria: "",
    codigo: "",
    nombre: "",
    unidadMe: "",
    precioventa: "",
    precioVenta2: precioventa,
  });

  const onSubmit = () => {
    Keyboard.dismiss();
    addProducto(categoria, codigo, nombre, unidadMe, precioventa, precioVenta2);
  };
  return (
    <ImgBackground>
      <View style={{ flex: 1 }}>
        <Appbar.Header mode="center-aligned">
          <Appbar.Content title="Nuevo Producto" />
        </Appbar.Header>
        <ScrollView style={styles.container}>
          <TextInput
            label="Nombre"
            mode="outlined"
            underlineColor="transparent"
            value={nombre}
            style={{
              ...styles.textInput,
              backgroundColor: colors.surface,
            }}
            onChangeText={(value) => onChange(value, "nombre")}
          />
          <TextInput
            label="Codigo"
            mode="outlined"
            underlineColor="transparent"
            value={codigo}
            style={{
              ...styles.textInput,
              backgroundColor: colors.surface,
            }}
            onChangeText={(value) => onChange(value, "codigo")}
          />
          <TextInput
            label="Categoria"
            mode="outlined"
            underlineColor="transparent"
            value={categoria}
            style={{
              ...styles.textInput,
              backgroundColor: colors.surface,
            }}
            onChangeText={(value) => onChange(value, "categoria")}
          />
          <TextInput
            label="Unidad Medida"
            mode="outlined"
            underlineColor="transparent"
            value={unidadMe}
            style={{
              ...styles.textInput,
              backgroundColor: colors.surface,
            }}
            onChangeText={(value) => onChange(value, "unidadMe")}
          />
          <TextInput
            label="Precio Venta"
            mode="outlined"
            keyboardType="numeric"
            underlineColor="transparent"
            value={precioventa}
            style={{
              ...styles.textInput,
              backgroundColor: colors.surface,
            }}
            onChangeText={(value) => onChange(value, "precioventa")}
          />
          <Button mode="contained"
                  onPress={onSubmit}
                  style={{ marginVertical: 5, backgroundColor: colors.secondary }}>
            Guardar
          </Button>
          <Button mode="contained"
                  onPress={() => navigation.goBack()}
                  style={{ marginVertical: 5, backgroundColor: colors.error }}>
            Cancelar
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
    marginVertical: 5,
  },
});
