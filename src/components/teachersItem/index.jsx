import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const TeachersItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.description}>Teachers: {item.description}</Text>
          <Text style={styles.dates}>edad: {item.age}</Text>
          <Text style={styles.dates}>is Active: {item.active ? "True" : "False"}</Text>
        </View>
        <View>
          <Ionicons
            name={item.active ? "checkmark-circle" : "ios-alert-circle"}
            size={25}
            color={item.active ? colorsTheme.green : colorsTheme.primary}
          />
        </View>
      </View>
    </View>
  );
};

export default TeachersItem;
