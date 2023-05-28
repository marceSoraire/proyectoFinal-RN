import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInit}>Login</Text>
      <Button title="go to" onPress={() => navigation.navigate("Init")} />
    </View>
  );
};

export default Login;
