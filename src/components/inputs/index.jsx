import React from "react";
import { Button, TextInput, View } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const Input = ({ value, onChangeText, onHandlerButton }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add new partners or teachers"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        title="Add"
        onPress={onHandlerButton}
        color={colorsTheme.background}
      />
    </View>
  );
};
export default Input;
