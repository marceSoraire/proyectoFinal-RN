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
  location: {
    marginTop: 20,
    marginHorizontal: 10,
    width: "95%",
    backgroundColor: colorsTheme.white,
    shadowColor: colorsTheme.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colorsTheme.primary,
    textAlign: "center",
  },
  map: {
    height: 220,
  },
});
