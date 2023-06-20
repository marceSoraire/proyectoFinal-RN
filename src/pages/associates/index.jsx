import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { AssociateItem } from "../../components";

const Associates = ({ navigation }) => {
  const associates = useSelector((state) => state.associate.associates);

  const onHandlerAssociate = (item) => {
    navigation.navigate("DetailsAssociates", { associateId: item.id });
  };
  const renderItem = ({ item }) => (
    <AssociateItem
      item={item}
      onselected={onHandlerAssociate}
    />
  );
  const KeyExtractor = (item) => item.id;
  return (
    <FlatList
      data={associates}
      style={styles.container}
      keyExtractor={KeyExtractor}
      renderItem={renderItem}
    />
  );
};

export default Associates;
