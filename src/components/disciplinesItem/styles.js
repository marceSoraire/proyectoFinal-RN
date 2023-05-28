import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants/index";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTouchable: {
    flex: 1,
    shadowColor: colorsTheme.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  name: {
    fontSize: 20,
    fontFamily: "semiBold",
    color: colorsTheme.text,
  },
  image: {
    width: 320,
    height: 170,
    borderRadius: 10,
  },
});
