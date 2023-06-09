import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.quantity}>Cant: {item.quantity}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons
            name="trash"
            size={22}
            color={colorsTheme.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
