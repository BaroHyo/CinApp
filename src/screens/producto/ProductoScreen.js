import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImgBackground from "../../components/ImgBackground";
import { Appbar, Button, TextInput, useTheme } from "react-native-paper";
import { useForm } from "../../hooks/useForm";
import { financial } from "../../util/commo";

export const ProductoScreen = ({ navigation,route }) => {

  const { colors } = useTheme();

  const { item } = route.params;

  const {
    categoria,
    codigo,
    nombre,
    unidadMe,
    precioventa,
    onChange,
  } = useForm(item);


  return (
    <ImgBackground>
      <View style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="PRODCUTO" />
        </Appbar.Header>
        <ScrollView style={styles.container}>
          <TextInput
            label="Nombre"
            mode="outlined"
            underlineColor="transparent"
            value={nombre}
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            value={financial(precioventa)}
            disabled
            style={{
              ...styles.textInput,
              backgroundColor: colors.surface,
            }}
            onChangeText={(value) => onChange(value, "precioventa")}
          />
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
