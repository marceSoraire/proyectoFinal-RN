import { View, TouchableOpacity, Image, Text } from "react-native";

import { styles } from "./styles";
const AssociateItem = ({ item, onselect }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onselect(item)}>
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.nAssociate}>N° associate: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AssociateItem;
