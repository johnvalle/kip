import { IBMPlexSans_400Regular, IBMPlexSans_600SemiBold, IBMPlexSans_700Bold } from "@expo-google-fonts/ibm-plex-sans";
import { StyleProp, TextStyle, ViewStyle, TouchableNativeFeedback } from "react-native";
import { ButtonProps } from "react-native-elements";

type Typo = {
  xl: StyleProp<TextStyle>;
  lg: StyleProp<TextStyle>;
  md: StyleProp<TextStyle>;
  sm: StyleProp<TextStyle>;
};

type ButtonConfig = {
  primary: ButtonProps;
  secondary: ButtonProps;
  icon: StyleProp<ViewStyle>;
};

const colors = {
  primary: "#687833",
  primaryLight: "#B1BC8B",
  primaryDark: "#495329",
  white: "#FFFFFF",
  secondary: "#F2C94C",
  orange: "#F2994A",
  red: "#EB5757",
  gray: {
    "300": "#828282",
    "500": "#E0E0E0",
    "600": "#F9F9F9",
  },
};

const fonts = {
  regular: "IBMPlexSans_400Regular",
  semiBold: "IBMPlexSans_600SemiBold",
  bold: "IBMPlexSans_700Bold",
};

const borders = {
  radius: 5,
};

const ripple = TouchableNativeFeedback.Ripple(colors.primaryLight, true);

const typography: Typo = {
  xl: {
    fontSize: 36,
    fontFamily: fonts.bold,
  },
  lg: {
    fontSize: 18,
    fontFamily: fonts.bold,
  },
  md: {
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  sm: {
    fontSize: 12,
    fontFamily: fonts.regular,
  },
};
const baseButton = {
  buttonStyle: {
    height: 45,
    borderRadius: borders.radius,
  },
  titleStyle: {
    fontFamily: fonts.bold,
  },
};
const buttons: ButtonConfig = {
  primary: {
    buttonStyle: {
      ...baseButton.buttonStyle,
      backgroundColor: colors.primary,
    },
    titleStyle: {
      ...baseButton.titleStyle,
    },
  },
  secondary: {
    buttonStyle: {
      ...baseButton.buttonStyle,
      backgroundColor: colors.primaryLight,
    },
    titleStyle: {
      ...baseButton.titleStyle,
      color: colors.primaryDark,
    },
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 50,
    justifyContent: "center",
  },
};

const input = {
  container: {
    height: 40,
    borderWidth: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    borderRadius: borders.radius,
    borderColor: colors.gray[500],
  },
  containerFocused: {
    borderColor: colors.secondary,
  },
  containerError: {
    borderColor: colors.red,
  },
};

export default {
  borders,
  buttons,
  colors,
  fonts,
  input,
  typography,
  ripple,
};
