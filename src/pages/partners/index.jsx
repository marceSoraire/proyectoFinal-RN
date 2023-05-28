import { useState } from "react";
import { View, Text, Button, Image } from "react-native";

import { styles } from "./styles";
import { Input } from "../../components";
import { colorsTheme } from "../../constants";

const Partners = ({ navigation }) => {
  const [text, setText] = useState("");
  const onAdd = (item) => {
    console.warn("hellow");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textInit}>Partners</Text>
      <Input
        value={text}
        onChangeText={(text) => setText(text)}
        onHandlerButton={() => onAdd}
      />
      <Image
        source={{
          uri: "https://www.ugeltarata.edu.pe/media/articulo/image/2874/28746f12b9b98cfefc431c320c74b326d219_articulo.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.bottomContainer}>
        <Button
          title="Teachers"
          color={colorsTheme.tabs}
          onPress={() => navigation.navigate("Teachers")}
        />
        <Button
          title="Associates"
          color={colorsTheme.tabs}
          onPress={() => navigation.navigate("Associates")}
        />
      </View>
    </View>
  );
};

export default Partners;
