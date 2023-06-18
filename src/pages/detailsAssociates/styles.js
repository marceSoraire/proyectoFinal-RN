import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "40%",
    minHeight: 220,
    width: "100%",
  },
  datesContainer: {
    padding: 25,
  },
  name: {
    fontFamily: "medium",
    fontSize: 20,
    color: colorsTheme.text,
  },
  lastName: {
    fontFamily: "medium",
    fontSize: 20,
    color: colorsTheme.text,
  },
  age: {
    fontFamily: "regular",
    fontSize: 15,
    color: colorsTheme.text,
  },
  num: {
    fontFamily: "italic",
    fontSize: 15,
    color: colorsTheme.text,
  },
});
