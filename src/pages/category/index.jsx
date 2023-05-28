import { useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import { filterCategory, selectCategory } from "../../store/actions/categories.action";

const Category = ({ navigation }) => {
  const dispatch = useDispatch();
  const disciplines = useSelector((state) => state.disciplines.selected);
  const filteredCategory = useSelector((state) => state.categorys.filteredCategory);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Section", {
      name: item.name,
    });
  };

  useEffect(() => {
    dispatch(filterCategory(disciplines.id));
  }, []);

  const renderItem = ({ item }) => (
    <CategoryItem
      item={item}
      onSelected={onSelected}
    />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredCategory}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Category;
