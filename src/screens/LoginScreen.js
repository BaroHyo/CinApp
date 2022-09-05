import React, { useContext, useEffect, useState } from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import { Text, Divider, TextInput } from "react-native-paper";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";

export const LoginScreen = () => {

  const { signIn, errorMessage, removeError } = useContext(AuthContext);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);


  const { codigo, onChange } = useForm({
    codigo: "",
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert("Login incorrecto", errorMessage, [{
      text: "Ok",
      onPress: removeError,
    }]);

  }, [errorMessage]);

  const onLogin = () => {
    Keyboard.dismiss();
    signIn({ codigo });
  };

  return (
    <Background>
      <Logo />
      <Header>CIN</Header>
      <Text variant="headlineSmall">
        Iniciar Sesion
      </Text>
      <Text variant="labelLarge">
        Ingrese su codigo asignado
      </Text>
      <Divider />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColor="transparent"
          mode="outlined"
          label="Codigo Vendedor"
          keyboardType="numeric"
          value={codigo}
          secureTextEntry={isPasswordSecure}
          right={<TextInput.Icon icon={isPasswordSecure ? "eye" : "eye-off"}
                                 onPress={() => setIsPasswordSecure(!isPasswordSecure)} />}
          onChangeText={(value) => onChange(value, "codigo")}
        />
      </View>
      <Button mode="contained" onPress={onLogin}>
        Ingresar
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    // backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    /// color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});
