import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const CartItem = ({ item, onRemove, onAddCart, onRestCart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View style={styles.bodyConten}>
          <View style={styles.bodyInfo}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => onRestCart(item)}>
              <Ionicons
                name="remove-circle-outline"
                size={25}
                color={colorsTheme.primary}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => onAddCart(item)}>
              <Ionicons
                name="md-add-circle-outline"
                size={25}
                color={colorsTheme.green}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons
            name="trash"
            size={30}
            color={colorsTheme.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
