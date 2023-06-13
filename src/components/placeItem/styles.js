import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colorsTheme.background,
    borderBottomWidth: 1,
  },
  image: {
    width: 130,
    height: 100,
    backgroundColor: colorsTheme.secondary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colorsTheme.black,
  },
  info: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "semiBold",
    fontSize: 16,
    color: colorsTheme.text,
  },
});
