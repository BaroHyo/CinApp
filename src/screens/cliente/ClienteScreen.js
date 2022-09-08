import React, { useState } from "react";
import { Appbar, Button, Card, Paragraph, useTheme } from "react-native-paper";
import TextInput from "../../components/TextInput";
import { ScrollView, StyleSheet, View } from "react-native";
import ImgBackground from "../../components/ImgBackground";
import { useForm } from "../../hooks/useForm";
import { financial } from "../../util/commo";
import { MapMin } from "../../components/MapMin";

export const ClienteScreen = ({ navigation, route }) => {

  const [isEdit, setIsEdit] = useState(true);
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
    prNombrefa,
    prSuc,
    prLat,
    prLon,
    prTiponego,
    prObs,
    onChange,
  } = useForm(item);

  const { colors } = useTheme();

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
          disabled={true}
        />
        <TextInput
          label="Codigo"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prCodigo}
          disabled={true}
        />
        <TextInput
          label="Direccion"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prDireccion}
          disabled={isEdit}
        />
        <TextInput
          label="Ubicacion"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prUbicacion}
          disabled={isEdit}
        />
        <TextInput
          label="Telefono"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prTelefono}
          disabled={isEdit}
        />
        <TextInput
          label="Celular"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prCelular}
          disabled={isEdit}
        />
        <TextInput
          label="Nit"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prNitfa}
          disabled={isEdit}
        />
        <TextInput
          label="Razon Social"
          mode="outlined"
          underlineColor="transparent"
          style={{ ...styles.textInput, backgroundColor: colors.surface }}
          value={prNombrefa}
          disabled={isEdit}
        />
        <Card>
          <View style={{ flex: 1 }}>
            <MapMin styles={{ height: 200 }}
                    latitude={prLat}
                    longitude={prLon} />
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
        />
        <Button mode="contained"
                onPress={() => console.log(1)}
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
