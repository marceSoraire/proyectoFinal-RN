import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { PlaceItem } from "../../components";

const SavePlace = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

  const onHandlerSelect = (id) => {
    navigation.navigate("DetailsPlaces", { placeId: id });
  };

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={onHandlerSelect}
    />
  );
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default SavePlace;
