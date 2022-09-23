import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Divider, FAB, Paragraph, Title, useTheme } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import { AuthContext } from "../../context/AuthContext";
import { PedidoContext } from "../../context/PedidoContext";
import { formatDate } from "../../util/commo";

export const PedidoScreen = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const { codigo } = useContext(AuthContext);
  const { pedido, loadPedido } = useContext(PedidoContext);
  const { colors } = useTheme();

  useEffect(() => {
    loadPedido(codigo, formatDate(date));
  }, [date]);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="PEDIDOS" />
        <Appbar.Action icon="calendar" onPress={() => setOpen(true)} />
      </Appbar.Header>

      <View style={styles.container}>
        <FlatList
          data={pedido}
          keyExtractor={(p) => p.peId}
          renderItem={({ item }) => (
            <Card>
              <Card.Title title={item.peCliente} />
              <Card.Content>
                <Paragraph>{formatDate(item.peFechaVe)}</Paragraph>
              </Card.Content>
            </Card>
          )}
          ItemSeparatorComponent={() => (
            <Divider style={{ marginVertical: 5 }} />
          )}
        />

        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <FAB
        icon="plus"
        style={{
          ...styles.fab,
          backgroundColor: colors.primary,
        }}
        onPress={() => navigation.navigate("ModalFormPedido")}
        variant="tertiary"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
