import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: colorsTheme.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 16,
    fontFamily: "bold",
    color: colorsTheme.text,
    marginBottom: 5,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodyContent: {
    flex: 1,
  },
  quantity: {
    fontSize: 14,
    fontFamily: "regular",
    color: colorsTheme.text,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontFamily: "medium",
    color: colorsTheme.text,
    marginBottom: 5,
  },
});
