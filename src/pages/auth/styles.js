import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInit: {
    textAlign: "center",
    fontFamily: "medium",
    fontSize: 22,
  },
  image: {
    width: 280,
    height: 280,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    minHeight: 340,
  },
  title: {
    fontFamily: "medium",
    fontSize: 18,
    textAlign: "center",
  },
  eye: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  label: {
    fontFamily: "semiBold",
    fontSize: 15,
    paddingVertical: 8,
  },
  link: {
    borderBottomColor: colorsTheme.primary,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  linkText: {
    paddingVertical: 8,
    fontFamily: "regular",
    fontSize: 14,
    borderBottomColor: colorsTheme.background,
    borderBottomWidth: 1,
    color: colorsTheme.background,
    textAlign: "center",
  },
  submit: {
    paddingVertical: 5,
  },
});
