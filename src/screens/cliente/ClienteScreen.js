import React, { useContext, useState } from "react";
import { Appbar, Button, Card, useTheme } from "react-native-paper";
import TextInput from "../../components/TextInput";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import ImgBackground from "../../components/ImgBackground";
import { useForm } from "../../hooks/useForm";
import { MapMin } from "../../components/MapMin";
import { ClienteContext } from "../../context/ClienteContext";
import { AuthContext } from "../../context/AuthContext";

export const ClienteScreen = ({ navigation, route }) => {

  const { codigo } = useContext(AuthContext);

  const { updateCliente, loadCLiente } = useContext(ClienteContext);
  const { item } = route.params;
  const {
    prId,
    prIdsub,
    prNombre,
    prDireccion,
    prCodigo,
    prUbicacion,
    prZona,
    prRuta,
    prTelefono,
    prVendedor,
    prNitfa,
    prCelular,
    prSuc,
    prLat,
    prLon,
    prTiponego,
    prObs,
    onChange,
  } = useForm({
    prId: item.prId,
    prIdsub: item.prIdsub,
    prNombre: item.prNombre,
    prDireccion: item.prDireccion,
    prCodigo: item.prCodigo,
    prUbicacion: item.prUbicacion,
    prZona: item.prZona,
    prRuta: item.prRuta,
    prTelefono: item.prTelefono,
    prVendedor: item.prVendedor,
    prNitfa: item.prNitfa,
    prCelular: item.prCelular,
    prSuc: item.prSuc,
    prLat: item.prLat,
    prLon: item.prLon,
    prTiponego: item.prTiponego,
    prObs: item.prObs,
  });

  const [isEdit, setIsEdit] = useState(true);
  const [latitud, setLatitud] = useState(item.prLat);
  const [longitud, setLongitud] = useState(item.prLon);

  const { colors } = useTheme();


  const onSave = () => {
    updateCliente({
      prId,
      prIdsub,
      prNombre,
      prDireccion,
      prCodigo,
      prUbicacion,
      prZona,
      prRuta,
      prTelefono,
      prVendedor,
      prNitfa,
      prCelular,
      prSuc,
      prLat,
      prLon,
      prTiponego,
      prObs,
    });
    loadCLiente(codigo);

  };


  const onEditarGeolocalizacion = () => {
    Alert.alert(
      "Mensaje",
      "Desea Editar Ubicacion?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Aceptar",
          onPress: () => navigation.navigate("ModalMapaEdit", {
            prLat: latitud,
            prLon: longitud,
            setLatitud,
            setLongitud,
          }),
        },
      ],
    );
  };

  return (
    <ImgBackground>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="CLIENTE" />
        <Appbar.Action icon="border-color" onPress={() => setIsEdit(!isEdit)} />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <TextInput
          label="Nombre"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prNombre}
          disabled={isEdit}
          autoCapitalize={"characters"}
          enterKeyHint={"next"}
          onChangeText={(value) => onChange(value, "prNombre")}
        />
        <TextInput
          label="Codigo"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prCodigo}
          disabled={isEdit}
          autoCapitalize={"characters"}
          onChangeText={(value) => onChange(value, "prCodigo")}
        />
        <TextInput
          label="Direccion"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prDireccion}
          disabled={isEdit}
          onChangeText={(value) => onChange(value, "prDireccion")}
        />
        <TextInput
          label="Ubicacion"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prUbicacion}
          disabled={isEdit}
          onChangeText={(value) => onChange(value, "prUbicacion")}
        />
        <TextInput
          label="Telefono"
          mode="outlined"
          keyboardType={"numeric"}
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prTelefono}
          disabled={isEdit}
          onChangeText={(value) => onChange(value, "prTelefono")}
        />
        <TextInput
          label="Celular"
          mode="outlined"
          keyboardType={"numeric"}
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prCelular}
          disabled={isEdit}
          onChangeText={(value) => onChange(value, "prCelular")}
        />
        <TextInput
          label="Nit"
          mode="outlined"
          keyboardType={"numeric"}
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prNitfa}
          disabled={isEdit}
          onChangeText={(value) => onChange(value, "prNitfa")}
        />

        <Card onPress={onEditarGeolocalizacion}>
          <View style={{ flex: 1 }}>
            <MapMin styles={{ height: 200 }}
                    latitude={latitud}
                    longitude={longitud} />
          </View>
        </Card>
        <TextInput
          multiline
          numberOfLines={4}
          mode="outlined"
          label="Observaciones"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prObs}
          disabled={isEdit}
          onChangeText={(value) => onChange(value, "prObs")}
        />
        <Button mode="contained"
                onPress={onSave}
                disabled={isEdit}
                style={{
                  marginVertical: 5,
                  backgroundColor: colors.secondary,
                }}>
          Guardar
        </Button>
      </ScrollView>
    </ImgBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 10,
  },
  textInput: {
    marginVertical: 2,
  },
});
