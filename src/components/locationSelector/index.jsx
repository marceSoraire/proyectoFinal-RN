import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import { useState } from "react";
import { View, Text, Button, Alert } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";
import MapPreview from "../mapPreview/index";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para obtener la ubicacion", [
        { text: "OK" },
      ]);
      return false;
    }
    return true;
  };

  const onHandlerLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;
    const location = await getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };
  return (
    <View style={styles.container}>
      <MapPreview
        location={pickedLocation}
        style={styles.preview}>
        <Text>No seleccionaste ninguna ubicacion</Text>
      </MapPreview>
      <Button
        title="Ubicacion proxima competencia"
        onPress={onHandlerLocation}
        color={colorsTheme.background}
      />
    </View>
  );
};

export default LocationSelector;
