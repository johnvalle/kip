import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export default StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
  },
  container: {
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
    bottom: "5%",
    right: "10%",
  },
});
