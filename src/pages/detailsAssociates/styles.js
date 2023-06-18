import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsTheme.gray,
  },
  imgPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginVertical: 40,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: colorsTheme.black,
  },
  location: {
    justifyContent: "center",
    alignItems: "center",
  },
  datesContainer: {
    width: "70%",
    padding: 25,
  },
  row: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "semiBold",
    fontSize: 20,
    color: colorsTheme.black,
  },
  name: {
    fontFamily: "italic",
    fontSize: 20,
    color: colorsTheme.text,
  },
  lastName: {
    fontFamily: "italic",
    fontSize: 20,
    color: colorsTheme.text,
  },
  age: {
    fontFamily: "italic",
    fontSize: 20,
    color: colorsTheme.text,
  },
  num: {
    fontFamily: "italic",
    fontSize: 20,
    color: colorsTheme.primary,
  },
});
