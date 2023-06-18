import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "semiBold",
    fontSize: 16,
    paddingBottom: 15,
  },
  input: {
    width: "50%",
    borderBottomColor: colorsTheme.background,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
