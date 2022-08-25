import React, { useState } from "react";
import { Divider } from "react-native-paper";
import TextInput from "../../components/TextInput";
import { ScrollView, StyleSheet } from "react-native";
import ImgBackground from "../../components/ImgBackground";

export const ClienteScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [text, setText] = useState("");

  return (
    <ImgBackground>
      <ScrollView style={styles.container}>
        <TextInput
          label="Nombre"
          mode="flat"
          style={styles.textInput}
        />
        <Divider />
        <TextInput
          label="Codigo"
          mode="flat"
          style={styles.textInput}
        />
        <Divider />
        <TextInput
          label="Direccion"
          mode="flat"
          style={styles.textInput}
        />
        <Divider />
        <TextInput
          label="Ubicacion"
          mode="flat"
          style={styles.textInput}
        />
        <Divider />
      </ScrollView>
    </ImgBackground>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  textInput: {
    marginTop: 2,
    marginBottom: 2,
  },
});
