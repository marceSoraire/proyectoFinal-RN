import { View, TouchableOpacity, Image, Text } from "react-native";

import { styles } from "./styles";

const PlaceItem = ({ id, title, image, address, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelect(id)}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.coords}>{address}</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
    </TouchableOpacity>
  );
};

export default PlaceItem;
