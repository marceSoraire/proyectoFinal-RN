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
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: colorsTheme.secondary,
  },
  info: {
    margin: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "semiBold",
    fontSize: 18,
    color: colorsTheme.text,
  },
  nAssociate: {
    fontFamily: "italic",
    fontSize: 14,
    color: colorsTheme.text,
  },
});
