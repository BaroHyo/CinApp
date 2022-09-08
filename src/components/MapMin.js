import React, { useEffect, useRef } from "react";
import { useLocation } from "../hooks/useLocation";
import LoadingScreen from "../screens/LoadingScreen";
import MapView, { Marker } from "react-native-maps";
import { Alert } from "react-native";

export const MapMin = ({ styles, latitude, longitude }) => {

  const {
    hasLocation,
    initialPosition,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
  } = useLocation();

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


  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <React.Fragment>
      <MapView
        ref={(el) => mapViewRef.current = el}
        style={styles}
        rotateEnabled={false}
        scrollEnabled={false}
        initialRegion={{
          latitude: latitude,//initialPosition.latitude,
          longitude: longitude, //initialPosition.longitude,
          latitudeDelta: 1 / 300,
          longitudeDelta: 2 / 300,
        }}
        onTouchStart={() => followingRef.current = false}>
        <React.Fragment>
          <Marker
            coordinate={{
              latitude: latitude, //initialPosition.latitude,
              longitude: longitude, //initialPosition.longitude,
            }}
            onPress={() => console.log(marker)}
          />
        </React.Fragment>
      </MapView>
    </React.Fragment>
  );
};
