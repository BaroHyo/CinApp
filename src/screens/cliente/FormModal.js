import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImgBackground from "../../components/ImgBackground";
import { Appbar, Button, TextInput, useTheme } from "react-native-paper";
import { useForm } from "../../hooks/useForm";
import { ClienteContext } from "../../context/ClienteContext";
import { AuthContext } from "../../context/AuthContext";

export const FormModal = ({ navigation }) => {

  const { codigo } = useContext(AuthContext);

  const { addCliente, loadCLiente } = useContext(ClienteContext);

  const [prLat, setPrLat] = useState(0);
  const [prLon, setPrLon] = useState(0);

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
    prNombrefa,
    prSuc,
    //prLat,
    //prLon,
    prTiponego,
    prObs,
    onChange,
  } = useForm({
    prId: 0,
    prIdsub: 0,
    prNombre: "",
    prDireccion: "",
    prCodigo: "",
    prUbicacion: "",
    prZona: "",
    prRuta: "",
    prTelefono: "",
    prVendedor: codigo,
    prNitfa: "",
    prCelular: "",
    prNombrefa: "",
    prSuc: "",
    // prLat: la,
    // prLon: lo,
    prTiponego: "",
    prObs: "",
  });

  const { colors } = useTheme();

  const onSave = () => {
    addCliente({
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
      prNombrefa,
      prSuc,
      prLat,
      prLon,
      prTiponego,
      prObs,
    });
    loadCLiente(codigo);
    navigation.goBack();
  };


  return (
    <ImgBackground>
      <View style={styles.container}>
        <Appbar.Header mode="center-aligned">
          <Appbar.Content title="Nuevo Producto" />
        </Appbar.Header>
        <ScrollView style={styles.containerForm}>
          <TextInput
            label="Nombre"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prNombre}
            onChangeText={(value) => onChange(value, "prNombre")}
          />
          <TextInput
            label="Codigo"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prCodigo}
            onChangeText={(value) => onChange(value, "prCodigo")}
          />
          <TextInput
            label="Direccion"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prDireccion}
            onChangeText={(value) => onChange(value, "prDireccion")}
          />
          <TextInput
            label="Ubicacion"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prUbicacion}
            onChangeText={(value) => onChange(value, "prUbicacion")}
          />
          <TextInput
            label="Telefono"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prTelefono}
            keyboardType="numeric"
            onChangeText={(value) => onChange(value, "prTelefono")}
          />
          <TextInput
            label="Celular"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prCelular}
            keyboardType="numeric"
            onChangeText={(value) => onChange(value, "prCelular")}
          />
          <TextInput
            label="Nit"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prNitfa}
            onChangeText={(value) => onChange(value, "prNitfa")}
          />
          <TextInput
            label="Razon Social"
            mode="outlined"
            underlineColor="transparent"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prNombrefa}
            onChangeText={(value) => onChange(value, "prNombrefa")}
          />
          <Button icon="map-marker-radius"
                  mode="text"
                  onPress={() => navigation.navigate("ModalMapa", {
                    setPrLat,
                    setPrLon,
                  })}>
            Obtener Geolocalizacion
          </Button>
          <TextInput
            multiline
            numberOfLines={4}
            mode="outlined"
            label="Observaciones"
            style={{ ...styles.textInput, backgroundColor: colors.surface }}
            value={prObs}
            onChangeText={(value) => onChange(value, "prObs")}
          />
          <Button mode="contained"
                  onPress={onSave}
                  style={{
                    marginVertical: 10,
                    backgroundColor: colors.secondary,
                  }}>
            Guardar
          </Button>
          <Button mode="contained"
                  onPress={() => navigation.goBack()}
                  style={{
                    marginVertical: 10,
                    backgroundColor: colors.error,
                  }}>
            Cancelar
          </Button>
        </ScrollView>
      </View>
    </ImgBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForm: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  textInput: {
    marginVertical: 3,
  },
});
