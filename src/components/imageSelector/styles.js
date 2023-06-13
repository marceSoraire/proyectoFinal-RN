import { StyleSheet } from "react-native";

import { colorsTheme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    marginHorizontal: 80,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colorsTheme.background,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  cam: {
    alignItems: "flex-end",
    marginRight: 120,
    marginBottom: 20,
    marginTop: -40,
  },
});
