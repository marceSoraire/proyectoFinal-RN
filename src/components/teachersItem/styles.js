import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants/index";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: 120,
    backgroundColor: colorsTheme.gray,
    borderWidth: 0.2,
    borderRadius: 2,
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
  name: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "semiBold",
    color: colorsTheme.text,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    fontSize: 15,
    fontFamily: "medium",
    color: colorsTheme.text,
  },
  dates: {
    fontSize: 13,
    fontFamily: "regular",
    color: colorsTheme.text,
  },
});
