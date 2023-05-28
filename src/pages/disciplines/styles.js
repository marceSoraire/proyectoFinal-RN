import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInit: {
    color: colorsTheme.text,
    fontSize: 22,
    fontFamily: "medium",
  },
});
