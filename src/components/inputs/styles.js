import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    color: colorsTheme.text,
    fontSize: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 6,
  },
});
