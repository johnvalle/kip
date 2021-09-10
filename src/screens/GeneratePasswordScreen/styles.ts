import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  resultContainer: {
    backgroundColor: theme.colors.white,
    padding: 12,
    marginVertical: 10,
    borderRadius: theme.borders.radius,
    elevation: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
