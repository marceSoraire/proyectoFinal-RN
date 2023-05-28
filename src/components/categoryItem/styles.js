import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: colorsTheme.gray,
    shadowColor: colorsTheme.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    padding: 10,
    borderRadius: 10,
  },
  name: {
    fontFamily: "medium",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    fontFamily: "italic",
    color: colorsTheme.text,
    fontSize: 15,
    textAlign: "center",
  },
  price: {
    fontFamily: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
