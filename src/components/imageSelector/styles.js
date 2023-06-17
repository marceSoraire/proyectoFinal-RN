import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    marginHorizontal: 80,
    position: "relative",
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colorsTheme.background,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 100,
  },
  noImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  cam: {
    position: "absolute",
    bottom: -10,
    right: 10,
  },
});
