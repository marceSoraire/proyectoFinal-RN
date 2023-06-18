import { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { ImageSelector } from "../../components";
import { colorsTheme } from "../../constants";
import { addAssociate } from "../../store/actions/associates.action";

const NewAssociates = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLatsName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  const onHandlerChangeName = (name) => {
    setName(name);
  };
  const onHandlerChangeLastName = (lastName) => {
    setLatsName(lastName);
  };
  const onHandlerChangeAge = (age) => {
    setAge(age);
  };

  const onHandlerSubmit = () => {
    dispatch(addAssociate({ name, lastName, age, image }));
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
          placeholder="Nombre"
          onChangeText={onHandlerChangeName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          onChangeText={onHandlerChangeLastName}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Año"
          onChangeText={onHandlerChangeAge}
          value={age}
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
