import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colorsTheme.background,
    borderWidth: 1,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
