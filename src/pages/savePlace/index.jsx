import React from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { PlaceItem } from "../../components/index";

const SavePlace = () => {
  // const dispatch = useDispatch;
  const places = useSelector((state) => state.place.places);

  // useEffect(() => {
  //   dispatch(getPlaces());
  // }, [dispatch]);

  const renderItem = ({ item }) => <PlaceItem {...item} />;
  const KeyExtractor = (item) => item.id;
  return (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={KeyExtractor}
      renderItem={renderItem}
    />
  );
};

export default SavePlace;
