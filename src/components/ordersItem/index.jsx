import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrdersItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.bodyContain}>
        <View>
          <Text style={styles.total}>$ {item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <FontAwesome
            name="remove"
            size={24}
            color={colorsTheme.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersItem;
