import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const TeachersItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.description}>Teachers: {item.description}</Text>
          <Text style={styles.dates}>edad: {item.age}</Text>
          <Text style={styles.dates}>is Active: </Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item)}>
          <Ionicons
            name={item.active ? "checkmark-circle" : "trash"}
            size={22}
            color={item.active ? colorsTheme.green : colorsTheme.red}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeachersItem;
