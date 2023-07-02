import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
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
    paddingVertical: 18,
    paddingHorizontal: 15,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colorsTheme.gray,
  },
  bodyConten: {
    width: 200,
  },
  bodyInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
    fontFamily: "bold",
    color: colorsTheme.text,
    marginBottom: 5,
  },
  add: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  quantity: {
    fontSize: 15,
    paddingHorizontal: 15,
    fontFamily: "semiBold",
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
