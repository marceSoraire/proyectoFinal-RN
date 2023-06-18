import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { TEACHERS, colorsTheme } from "../../constants";

const Section = () => {
  const navigation = useNavigation();
  const section = useSelector((state) => state.categorys.selected);
  const leader = TEACHERS.find((t) => t.id === section.id);

  const onHandlerAssociate = () => {
    navigation.navigate("NewAssociates");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: section.image }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{section.name}</Text>
        <Text style={styles.teacher}>Profesor/a: {leader.name}</Text>
        <Text style={styles.description}>{section.description}</Text>
        <Text style={styles.price}>$ {section.price} x Mes</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.teacher}>Dias y Horarios</Text>
        <Text style={styles.day}>dias: {section.day}</Text>
        <Text style={styles.hs}>hs: {section.hs}</Text>
      </View>
      <Button
        title="Ser Socio!"
        color={colorsTheme.background}
        onPress={onHandlerAssociate}
      />
    </View>
  );
};

export default Section;
