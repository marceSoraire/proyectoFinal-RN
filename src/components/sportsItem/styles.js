import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants/index";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: 150,
    backgroundColor: colorsTheme.white,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: "center",
    fontFamily: "semiBold",
    fontSize: 15,
  },
  sportImage: {
    width: 110,
    height: 110,
    marginRight: 10,
    borderRadius: 10,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    flexWrap: "wrap",
  },
  name: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "semiBold",
    color: colorsTheme.text,
  },
  price: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "medium",
    color: colorsTheme.text,
  },
});
