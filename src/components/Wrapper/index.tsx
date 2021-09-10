import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

type WrapperProps = {
  customStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export default function Wrapper(props: WrapperProps) {
  return <SafeAreaView style={[styles.container, props.customStyle]}>{props.children}</SafeAreaView>;
};
