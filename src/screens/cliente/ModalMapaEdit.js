import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Appbar, Button, Card, Snackbar, Text, useTheme } from "react-native-paper";

export const ModalMapaEdit = ({ navigation, route }) => {

  const { prLat, prLon, setLatitud, setLongitud } = route.params;

  const { colors } = useTheme();

  const [region, setRegion] = useState({
    latitude: prLat,
    longitude: prLon,
    latitudeDelta: 1 / 400,
    longitudeDelta: 2 / 400,
  });

  const [visible, setVisible] = useState(false);

  const mapViewRef = useRef();
  const followingRef = useRef(true);

  useEffect(() => {
    if (!followingRef.current) return;
    mapViewRef.current?.animateCamera({
      center: { prLat, prLon },
    });
  }, [prLat, prLon]);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const onSave = () => {
    const { latitude, longitude } = region;
    setLatitud(latitude);
    setLongitud(longitude);
    onToggleSnackBar();
  };

  const onRegion = (region) => {
    setRegion(region);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Obtener Geolocalizacion" />
      </Appbar.Header>
      <React.Fragment>
        <MapView
          ref={(el) => mapViewRef.current = el}
          style={{ flex: 1 }}
          showsUserLocation={false}
          showsMyLocationButton={false}
          initialRegion={{
            latitude: prLat,
            longitude: prLon,
            latitudeDelta: 1 / 400,
            longitudeDelta: 2 / 400,
          }}
          onTouchStart={() => followingRef.current = false}
          onRegionChange={(region) => onRegion(region)}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
        </MapView>
        <Card style={styles.viewFooter}>
          <Text style={{ color: "black" }}> latitude: {region.latitude}</Text>
          <Text style={{ color: "black" }}> longitude: {region.longitude}</Text>
          <Button mode="contained"
                  onPress={onSave}
                  style={{ marginVertical: 5, backgroundColor: colors.secondary }}>
            Guardar Ubicacion
          </Button>
        </Card>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={1000}>
          Se obtenio la geolocalización.
        </Snackbar>
      </React.Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
