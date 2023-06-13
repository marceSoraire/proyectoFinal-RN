import { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { ImageSelector } from "../../components";
import { colorsTheme } from "../../constants";
import { agregarPlace } from "../../store/actions/place.action";

const NewAssociates = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerSubmit = () => {
    dispatch(agregarPlace({ title: text, image }));
    navigation.navigate("Associates");
  };

  const onImage = (imageUri) => {
    setImage(imageUri);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nuevo Socio</Text>
        <ImageSelector onImage={onImage} />
        <TextInput
          style={styles.input}
          placeholder="Nombre/Apellido - año"
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <Button
          title="Agregar Socio"
          color={colorsTheme.background}
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewAssociates;
