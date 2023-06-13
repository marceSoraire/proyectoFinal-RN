import { useState } from "react";
import { View, ScrollView, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { LocationSelector } from "../../components";
import { colorsTheme } from "../../constants";
import { agregarPlace } from "../../store/actions/place.action";

const Location = ({ navigation }) => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);

  const onHandlerLocation = () => {
    dispatch(agregarPlace(location));
    navigation.navigate("SavePlace");
  };

  const onLocation = (ubiLocation) => {
    setLocation(ubiLocation);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Proxima Competencia</Text>
        <LocationSelector onLocation={onLocation} />
        <Button
          title="Agregar Ubicacion"
          color={colorsTheme.background}
          onPress={onHandlerLocation}
        />
      </View>
    </ScrollView>
  );
};

export default Location;
