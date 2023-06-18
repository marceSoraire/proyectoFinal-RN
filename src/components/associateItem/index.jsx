import { View, TouchableOpacity, Image, Text } from "react-native";

import { styles } from "./styles";
const AssociateItem = ({ item, onselected }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onselected(item)}>
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.nAssociate}>N° Socio: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AssociateItem;
