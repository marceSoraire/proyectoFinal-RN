import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { DisciplinesItem } from "../../components";
import { selectDiscipline } from "../../store/actions";

const Disciplines = ({ navigation }) => {
  const dispatch = useDispatch();
  const disciplines = useSelector((state) => state.disciplines.data);

  const onSelected = (item) => {
    dispatch(selectDiscipline(item.id));
    navigation.navigate("Category", {
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <DisciplinesItem
      item={item}
      onSelected={onSelected}
    />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={disciplines}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Disciplines;
