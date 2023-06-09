import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { SportsItem } from "../../components";

const Sports = () => {
  const sports = useSelector((state) => state.sports.data);

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => <SportsItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={sports}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Sports;
