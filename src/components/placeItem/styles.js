import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    borderBottomColor: colorsTheme.background,
    borderBottomWidth: 1,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colorsTheme.black,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "semiBold",
    fontSize: 17,
    color: colorsTheme.text,
  },
  coords: {
    fontFamily: "italic",
    fontSize: 14,
    color: colorsTheme.text,
  },
});
