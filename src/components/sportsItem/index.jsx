import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";
import { addCart } from "../../store/actions";

const SportsItem = ({ item }) => {
  const dispatch = useDispatch();

  const onAddCart = () => {
    dispatch(addCart(item));
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.sportImage}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.content}>
          <Text style={styles.header}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onAddCart(item.id)}>
          <MaterialIcons
            name="add-shopping-cart"
            size={25}
            color={colorsTheme.green}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SportsItem;
