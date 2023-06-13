import { View, Image } from "react-native";

import { styles } from "./styles";
import { URL_MAPS } from "../../utils/maps/maps";

const MapPreview = ({ children, location, style }) => {
  const { lat, lng } = location || {};

  const mapPreviewUrl = location ? URL_MAPS(lat, lng) : "";
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? (
        <Image
          style={styles.mapImage}
          source={{ uri: mapPreviewUrl }}
        />
      ) : (
        children
      )}
    </View>
  );
};

export default MapPreview;
