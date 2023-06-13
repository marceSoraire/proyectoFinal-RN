import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 300,
    borderWidth: 1,
    borderColor: colorsTheme.black,
  },
});
