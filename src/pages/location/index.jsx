import { useState } from "react";
import { View, ScrollView, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { LocationSelector, ImageUbi } from "../../components";
import { colorsTheme } from "../../constants";
import { addPlaceAsync } from "../../store/actions/place.action";

const Location = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImg] = useState("");
  const [coords, setCoords] = useState(null);

  const enable = text && image && coords;

  const onHandlerChangeText = (text) => {
    setText(text);
  };
  const onLocation = (ubiLocation) => {
    setCoords(ubiLocation);
  };
  const onImg = (imageUri) => {
    setImg(imageUri);
  };

  const onHandlerLocation = () => {
    dispatch(addPlaceAsync(text, image, coords));
    navigation.navigate("SavePlace");
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
