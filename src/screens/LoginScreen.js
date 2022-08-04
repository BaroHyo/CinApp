import React from 'react'
import { Text, Divider } from 'react-native-paper'
import Background from '../components/Background '
import Button from '../components/Button'
import Header from '../components/Header'
import Logo from '../components/Logo'
import TextInput from '../components/TextInput'

export const LoginScreen = ({ navigation }) => {
  return (
    <Background>
      <Logo />
      <Header>CIN</Header>
      <Text variant='headlineSmall'>
        Iniciar Sesion
      </Text>
      <Text variant='labelLarge'>
        FJust sign up to our newsletter and enjoy!
      </Text>
      <Divider />
      <TextInput
        label="Codigo Vendedor"
        textContentType="emailAddress"
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={() => console.log(1)}>
        Ingresar
      </Button>

    </Background>
  )
}
