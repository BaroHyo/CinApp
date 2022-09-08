import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useLocation } from "../../hooks/useLocation";
import LoadingScreen from "../LoadingScreen";
import MapView, { Marker } from "react-native-maps";
import { Button, Card, Text, useTheme } from "react-native-paper";

export const ModalMapa = ({ navigation, route }) => {

  const { setPrLat, setPrLon } = route.params;

  const {
    hasLocation,
    initialPosition,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
  } = useLocation();

  const { colors } = useTheme();

  const [region, setRegion] = useState({});

  const mapViewRef = useRef();

  const followingRef = useRef(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!followingRef.current) return;
    const { latitude, longitude } = userLocation;
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    });
  }, [userLocation]);


  useEffect(() => {
    if (hasLocation) {
      setRegion({
        latitude: initialPosition.latitude,
        longitude: initialPosition.longitude,
        latitudeDelta: 1 / 300,
        longitudeDelta: 2 / 300,
      });
    }
  }, [hasLocation]);

  const onSave = () => {
    //console.log(region.latitude, region.longitude);
    setPrLat(region.latitude);
    setPrLon(region.longitude);
    navigation.goBack();
  };


  if (!hasLocation) {
    return <LoadingScreen />;
  }


  return (
    <View style={styles.container}>
      <React.Fragment>
        <MapView
          ref={(el) => mapViewRef.current = el}
          style={{ flex: 1 }}
          showsUserLocation={false}
          showsMyLocationButton={false}
          initialRegion={{
            latitude: initialPosition.latitude,
            longitude: initialPosition.longitude,
            latitudeDelta: 1 / 300,
            longitudeDelta: 2 / 300,
          }}
          onTouchStart={() => followingRef.current = false}
          onRegionChange={(region) => setRegion(region)}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            onPress={(e) => console.log(e)}
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
