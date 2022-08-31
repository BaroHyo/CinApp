import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useCounter } from "../hooks/useCounter";

export const Contador = ({ value = 0 }) => {

  const { counter, increment, decrement } = useCounter(value);

  return (
    <View style={styles.container}>
      <View style={styles.cajaButton}>
        <IconButton
          icon="minus"
          size={20}
          disabled={counter === 0}
          onPress={() => decrement(1)}
        />
      </View>
      <View style={styles.cajaButton}>
        <Text>{counter}</Text>
      </View>
      <View style={styles.cajaButton}>
        <IconButton
          icon="plus"
          size={20}
          onPress={() => increment(1)}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    borderRadius: 50,
    width: 100,
  },
  cajaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
});
