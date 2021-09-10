import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export default StyleSheet.create({
  container: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    padding: 12,
    marginVertical: 10,
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: theme.borders.radius,
  },
});
