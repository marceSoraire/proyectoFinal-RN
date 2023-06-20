import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { styles } from "./styles";
import { TeachersItem } from "../../components/index";
import { TEACHERS } from "../../constants/index";

const Teachers = () => {
  const renderItem = ({ item }) => <TeachersItem item={item} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TEACHERS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Teachers;
