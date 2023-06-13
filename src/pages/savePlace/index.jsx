import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { PlaceItem } from "../../components";

const SavePlace = ({ navigation }) => {
  const { places } = useSelector((state) => state.places);

  const onHandlerSelect = (id) => {
    navigation.navigate("DetailAssociates", { placeId: id });
  };
  const renderItem = ({ item }) => (
    <PlaceItem
      item={item}
      onselect={onHandlerSelect}
    />
  );
  const KeyExtractor = (item) => item.id;
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={places}
        style={styles.container}
        keyExtractor={KeyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SavePlace;
