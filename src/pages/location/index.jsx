import { useState } from "react";
import { View, ScrollView, Text, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { LocationSelector, ImageUbi } from "../../components";
import { colorsTheme } from "../../constants";
import { addPlaceAsync } from "../../store/actions/place.action";

const Location = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [location, setLocation] = useState(null);

  const enable = text && img && location;

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerLocation = () => {
    dispatch(addPlaceAsync(text, img, location));
    navigation.navigate("SavePlace");
  };

  const onLocation = (ubiLocation) => {
    setLocation(ubiLocation);
  };

  const onImg = (imageUri) => {
    setImg(imageUri);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Proxima Competencia</Text>
        <TextInput
          style={styles.input}
          placeholder="Localidad del club visitante"
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <ImageUbi onImg={onImg} />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={!enable}
          title="Agregar Ubicacion"
          color={colorsTheme.background}
          onPress={onHandlerLocation}
        />
      </View>
    </ScrollView>
  );
};

export default Location;
