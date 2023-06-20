import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";

import { styles } from "./styles";

const DisciplinesItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onSelected(item)}
        style={styles.containerTouchable}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DisciplinesItem;
