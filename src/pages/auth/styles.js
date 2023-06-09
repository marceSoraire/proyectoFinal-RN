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
    width: 300,
    height: 300,
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
  // containerStyle: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // modalContainer: {
  //   width: "75%",
  //   minHeight: 110,
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   padding: 20,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: colorsTheme.secondary,
  //   backgroundColor: colorsTheme.primary,
  // },
  // modalTitle: {
  //   fontSize: 14,
  //   fontFamily: "medium",
  //   textAlign: "center",
  // },
});
