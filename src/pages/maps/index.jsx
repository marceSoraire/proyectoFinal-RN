import Ionicons from "@expo/vector-icons/Ionicons";
import { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";
import { colorsTheme } from "../../constants/index";

const Maps = ({ navigation, route }) => {
  const { location } = route.params;
  const [selectedLocation, setSelectedLocation] = useState(null);

  const initialRegion = {
    latitude: location?.lat,
    longitude: location?.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHanldlerPickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const onHandlerSave = () => {
    if (selectedLocation) navigation.navigate("Locations", { mapLocation: selectedLocation });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          disabled={!selectedLocation}
          onPress={onHandlerSave}>
          <Ionicons
            name="md-save-sharp"
            size={23}
            color={!selectedLocation ? colorsTheme.text : colorsTheme.white}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <MapView
      initialRegion={initialRegion}
      style={styles.container}
      onPress={onHanldlerPickLocation}
      minZoomLevel={14}>
      {selectedLocation ? (
        <Marker
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation?.lat,
            longitude: selectedLocation?.lng,
          }}
        />
      ) : null}
    </MapView>
  );
};

export default Maps;
