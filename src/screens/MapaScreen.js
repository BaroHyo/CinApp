import React, { useContext, useState } from "react";
import { Alert, Dimensions, Modal, View } from "react-native";
import { Button, DataTable, Paragraph, Title } from "react-native-paper";
import { Map } from "../components/Map";
import { PedidoContext } from "../context/PedidoContext";
import { Marker } from "react-native-maps";

const windoHeight = Dimensions.get("screen").height;

const ColorsBase = {
  Grey: "#DCDCDC",
  White: "#FFFFFF",
  Blue: "#0000FF",
  Black: "#000000",
};


export const MapaScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState();

  const { pedido } = useContext(PedidoContext);


  // const { distribucion, loadDetalle, detallePedido } = useContext(DistribucionContext);

  /*const modalContenido = (distribucion: Distribucion) => {
    setModalVisible(true);
    setModalData(distribucion);
  };*/

  const createTwoButtonAlert = () => Alert.alert(
    "Mensaje",
    "Esta seguro de entregar el pedido",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Si", onPress: () => setModalVisible(!modalVisible) },
    ],
  );

  return (
    <View style={{ flex: 1 }}>
      <Map navigation={navigation}>
        {
          pedido.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.peLat,
                longitude: marker.peLon,
              }}
              title={marker.peDetalle}
              description={marker.peFechaVe}
              onPress={() => console.log(marker)}
            />
          ))
        }
      </Map>
    </View>
  );
};


/*

 <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        statusBarTranslucent
        onRequestClose={() => {
          Alert.alert("Modal ha sido cerrado.");
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: ColorsBase.White,
              marginLeft: 1,
              marginRight: 1,
              marginTop: windoHeight / 2,
              flex: 1,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Title>{modalData?.diCodigo}</Title>
              <Paragraph>{`Cliente: ${modalData?.diNombrecli}`}</Paragraph>
              <Paragraph>{`Importe: ${modalData?.diMonto} Bs`}</Paragraph>
              <Paragraph>{`Observacion: ${modalData?.diObservacion}`}</Paragraph>
              <DataTable style={{ marginVertical: 20 }}>
                <DataTable.Header>
                  <DataTable.Title>Nombre</DataTable.Title>
                  <DataTable.Title numeric>Cantidad</DataTable.Title>
                  <DataTable.Title numeric>Precio</DataTable.Title>
                </DataTable.Header>
                {
                  detallePedido.map(({ deDesc, deCanti, dePrecioT }, index) => (
                    <DataTable.Row key={index}>
                      <DataTable.Cell>{deDesc.toLowerCase()}</DataTable.Cell>
                      <DataTable.Cell numeric>{deCanti}</DataTable.Cell>
                      <DataTable.Cell numeric>{dePrecioT}</DataTable.Cell>
                    </DataTable.Row>
                  ))
                }
              </DataTable>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <View style={{ marginHorizontal: 20 }}>
                  <Button mode="contained"
                          style={{ width: 150 }}
                          uppercase={false}
                          onPress={createTwoButtonAlert}>
                    ENTREGAR
                  </Button>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                  <Button mode="contained"
                          color="#f08e25"
                          style={{ width: 150 }}
                          uppercase={false}
                          onPress={() => setModalVisible(!modalVisible)}>
                    CERRAR
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
 */
