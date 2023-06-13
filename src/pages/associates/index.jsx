import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { AssociateItem } from "../../components";

const Associates = ({ navigation }) => {
  const { places } = useSelector((state) => state.places);

  const onHandlerSelect = (id) => {
    navigation.navigate("DetailAssociates", { placeId: id });
  };
  const renderItem = ({ item }) => (
    <AssociateItem
      item={item}
      nAssociate={places.length}
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

export default Associates;
