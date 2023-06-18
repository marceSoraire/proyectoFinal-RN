import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { CartItem } from "../../components";
import { removeCart, confirmSport, addCart, onRest } from "../../store/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.data);
  const isCartEmpty = cart.length === 0;

  const onRemove = (id) => {
    dispatch(removeCart(id));
  };

  const onAddCart = (item) => {
    dispatch(addCart(item));
  };

  const onRestCart = (item) => {
    dispatch(onRest(item));
  };

  const onConfirm = () => {
    dispatch(confirmSport({ cart, total }));
  };
  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      onRemove={onRemove}
      onAddCart={onAddCart}
      onRestCart={onRestCart}
    />
  );
  const keyExtractor = (item) => item.id;
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <View>
        <TouchableOpacity
          disabled={isCartEmpty}
          style={isCartEmpty ? styles.buttonDisabled : styles.buttonConfirm}
          onPress={onConfirm}>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
