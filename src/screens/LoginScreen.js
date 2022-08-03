import React from 'react'
import { Text, Divider } from 'react-native-paper'
import Background from '../components/Background '
import TextInput from '../components/TextInput'

export const LoginScreen = () => {
  return (
    <Background>
      <Text variant='headlineSmall'>
        Sign up to our newsletter!
      </Text>
      <Text variant='labelLarge'>
        Get a monthly dose of fresh React Native Paper news straight to your mailbox. Just sign up to our newsletter and enjoy!
      </Text>
      <Divider />

      <TextInput
        label="Email"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

    </Background>
  )
}

