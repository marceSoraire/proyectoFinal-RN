import { View, TouchableOpacity, Image, Text } from "react-native";

import { styles } from "./styles";

const PlaceItem = ({ title, img, address }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.coords}>{address}</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: img }}
      />
    </TouchableOpacity>
  );
};

export default PlaceItem;
