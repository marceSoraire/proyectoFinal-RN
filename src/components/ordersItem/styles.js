import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
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
  headerContainer: {
    flex: 1,
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    fontFamily: "medium",
    color: colorsTheme.text,
  },
  bodyContain: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  total: {
    fontSize: 15,
    fontFamily: "bold",
    color: colorsTheme.text,
  },
});
