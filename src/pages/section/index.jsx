import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const Section = () => {
  const section = useSelector((state) => state.categorys.selected);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: section.image }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{section.name}</Text>
        <Text style={styles.teacher}>Profesor :</Text>
        <Text style={styles.description}>{section.description}</Text>
        <Text style={styles.price}>$ {section.price}</Text>
      </View>
      <View style={styles.buttomContanier}>
        <Button
          title="Sign up"
          onPress={() => null}
        />
      </View>
    </View>
  );
};

export default Section;
