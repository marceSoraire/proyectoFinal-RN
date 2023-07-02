import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { OrdersItem } from "../../components";
import { deleteOrder, getOrders } from "../../store/actions";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItem = ({ item }) => (
    <OrdersItem
      item={item}
      onDelete={onDelete}
    />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Orders;
