import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export default StyleSheet.create({
  checkbox: {
    width: 28,
    height: 28,
    margin: 8,
    borderRadius: theme.borders.radius,
  },
  checkboxUnchecked: {
    borderWidth: 1.5,
    borderColor: theme.colors.gray[300],
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
