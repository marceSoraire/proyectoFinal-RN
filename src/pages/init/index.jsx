import React from "react";
import { View, Text, Image, Button } from "react-native";

import { styles } from "./styles";

const Inti = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInit}>Club Atletico Nueva Era</Text>
      <Image
        source={{
          uri: "https://arofusa.com/wp-content/uploads/2019/09/nuevonuevaera.png",
        }}
        style={styles.image}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Disciplines")}
      />
    </View>
  );
};

export default Inti;
