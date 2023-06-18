import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { AssociateItem } from "../../components";

const Associates = ({ navigation }) => {
  const { associates } = useSelector((state) => state.associates);

  const onHandlerSelect = (item) => {
    navigation.navigate("DetailAssociates", { associateId: item.id });
  };
  const renderItem = ({ item }) => (
    <AssociateItem
      item={item}
      nAssociate={associates.length}
      onselect={() => onHandlerSelect(item)}
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
