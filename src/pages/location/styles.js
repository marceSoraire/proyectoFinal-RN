import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontFamily: "semiBold",
    fontSize: 17,
  },
  input: {
    borderBottomColor: colorsTheme.background,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});
