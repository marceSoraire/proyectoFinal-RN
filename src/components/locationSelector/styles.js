import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colorsTheme.background,
    borderWidth: 1,
    marginBottom: 15,
  },
});
