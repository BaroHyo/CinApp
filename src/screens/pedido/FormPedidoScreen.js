import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Button, Card, List, Paragraph, Title } from "react-native-paper";
import { Contador } from "../../components/Contador";
import { financial } from "../../util/commo";


export const FormPedidoScreen = ({ navigation, route }) => {

  const { item, nombre, codigo } = route.params;


  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode={"center-aligned"}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Formulario" />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={{
          marginHorizontal: 10,
          marginVertical: 8,
        }}>
          <Card>
            <Card.Content>
              <Title>{item.nombre}</Title>
              <Paragraph>Precio: {financial(item.precioventa)} Bs.</Paragraph>
              <Paragraph>Unidad Medida: {item.unidadMe} Bs.</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{
          marginHorizontal: 10,
          marginVertical: 8,
        }}>
          <Card>
            <Card.Content>
              <Title>{nombre}</Title>
              <Paragraph>Codigo: {codigo}</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <List.Section style={{
          marginVertical: 10,
        }}>
          <List.Subheader>Cantidad</List.Subheader>
          <List.Item
            title="PQTE"
            right={() => <Contador value={0} />}
          />
          <List.Item
            title="UNI"
            right={() => <Contador value={0} />}
          />
          <List.Item
            title="CAMB"
            right={() => <Contador value={0} />}
          />
          <List.Item
            title="BP"
            right={() => <Contador value={0} />}
          />
          <List.Item
            title="BU"
            right={() => <Contador value={0} />}
          />
        </List.Section>

        <View style={{
          marginVertical: 8,
        }}>
          <Button mode="contained" onPress={() => setModalVisible(false)}>
            AGREGAR
          </Button>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
  },
});
