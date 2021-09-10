import React from "react";
import { View, Text } from "react-native";
import { PasswordTestResult, PASS_STRENGTH_LIST, theme } from "../../constants";
import styles from "./styles";

type PasswordStrengthProps = Omit<PasswordTestResult, "criteria"> & {
  showLabel?: boolean;
}

export default function PasswordStrengthBar({ strength, score, showLabel = true }: PasswordStrengthProps) {
  return (
    <>
      {showLabel && (
        <Text style={[theme.typography.md, { color: theme.colors.primary, marginBottom: 8 }]}>
          Password Strength
        </Text>
      )}
      <View style={[styles.scoreContainer]}>
        <Text style={[theme.typography.md, { fontFamily: theme.fonts.regular }]}>{PASS_STRENGTH_LIST[strength].name}</Text>
        <Text style={[theme.typography.md, { fontFamily: theme.fonts.regular, marginLeft: 4 }]}>({score}%)</Text>
      </View>
      <View style={[styles.barContainer]}>
        {PASS_STRENGTH_LIST.map(
          (val, idx: number) =>
            strength >= idx && <View key={idx} style={[styles.bar, { backgroundColor: val.colorValue }]} />
        )}
      </View>
    </>
  );
}
