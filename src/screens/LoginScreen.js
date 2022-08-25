import React, { useContext } from 'react'
import { Text, Divider } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import Header from '../components/Header'
import Logo from '../components/Logo'
import TextInput from '../components/TextInput'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'

export const LoginScreen = () => {

  const { signIn, errorMessage, removeError } = useContext( AuthContext );

  const { codigo, onChange } = useForm({
    codigo: ''
  });

  const onLogin = () => {
    console.log(codigo);
    signIn({ codigo});
  }

  return (
    <Background>
      <Logo />
      <Header>CIN</Header>
      <Text variant='headlineSmall'>
        Iniciar Sesion
      </Text>
      <Text variant='labelLarge'>
        Ingrese su codigo asignado
      </Text>
      <Divider />
      <TextInput
        label="Codigo Vendedor"
        keyboardType="numeric"
        value={codigo}
        onChangeText={(value) => onChange(value, 'codigo')}
      />
      <Button mode="contained" onPress={onLogin}>
        Ingresar
      </Button>
    </Background>
  )
}
