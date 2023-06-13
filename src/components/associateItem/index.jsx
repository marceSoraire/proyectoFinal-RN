import { View, TouchableOpacity, Image, Text } from "react-native";

import { styles } from "./styles";
const AssociateItem = ({ item, nAssociate, onselect }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onselect(item.id)}>
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.nAssociate}>N° associate: {nAssociate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AssociateItem;
