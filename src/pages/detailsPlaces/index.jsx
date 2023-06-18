import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { MapPreview } from "../../components";

const PlaceDetail = ({ route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) => state.place.places.find((place) => place.id === placeId));

  const parseLocations = place.location;
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: place.img }}
        style={styles.image}
      />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview
          style={styles.map}
          location={{ lat: parseLocations.lat, lng: parseLocations.lng }}>
          <Text>Ubicacion no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
