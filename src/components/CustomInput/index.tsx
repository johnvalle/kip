import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";
import { CustomInputProps, theme } from "../../constants";

export default function CustomInput({
  label,
  placeholder,
  helperText,
  errorMessage,
  isRequired,
  controllerValue,
  controllerOnChange,
  ...inputProps
}: CustomInputProps) {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={{
        marginVertical: 8
      }}
    >
      <Text style={[theme.typography.md, { color: theme.colors.primary, marginBottom: 8 }]}>
        {label}{isRequired === false ? "" : (<Text style={{ color: theme.colors.secondary }}>*</Text>)}
      </Text>
      <Input
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        placeholder={placeholder}
        inputContainerStyle={[theme.input.container, isFocused && theme.input.containerFocused, errorMessage ? theme.input.containerError : {} ]}
        inputStyle={[theme.typography.md, { color: theme.colors.gray[300], fontFamily: theme.fonts.regular }]}
        containerStyle={{ paddingHorizontal: 0 }}
        onChangeText={(value) => controllerOnChange(value)}
        value={controllerValue}
        renderErrorMessage={false}
        {...inputProps}
      />
      {helperText && <Text style={[theme.typography.sm, { color: theme.colors.primary }]}>{label}</Text>}
      {errorMessage && <Text style={[theme.typography.sm, { color: theme.colors.red }]}>{errorMessage}</Text>}
    </View>
  );
}
