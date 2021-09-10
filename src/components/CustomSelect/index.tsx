import React, { ReactText, useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { CustomInputProps, theme } from "../../constants";

type CustomSelectData = {
  label: string;
  value: string;
};

type CustomSelectProps = CustomInputProps & {
  data: CustomSelectData[];
};

export default function CustomSelect({
  data,
  label,
  placeholder,
  helperText,
  errorMessage,
  isRequired,
  controllerValue,
  controllerOnChange,
}: CustomSelectProps) {
  
  const [pickerValues, setPickerValues] = useState<CustomSelectData[] | null>(data);

  return (
    pickerValues && (
      <View
        style={{
          marginVertical: 8
        }}
      >
        <Text style={[theme.typography.lg, { color: theme.colors.primary, marginBottom: 8 }]}>
          {label}{isRequired === false ? "" : (<Text style={{ color: theme.colors.secondary }}>*</Text>)}
        </Text>
        <TouchableOpacity style={[theme.input.container, { paddingHorizontal: 8 }]}>
          <Picker
            selectedValue={controllerValue ? controllerValue : placeholder}
            style={{ height: 40, padding: 0 }}
            onValueChange={(itemValue, itemIndex) => controllerOnChange(itemValue.toString())}
          >
            {pickerValues.map(({ label, value }, idx: number) => (
              <Picker.Item key={idx} label={label} value={value} />
            ))}
          </Picker>
        </TouchableOpacity>
        {helperText && <Text style={[theme.typography.sm, { color: theme.colors.primary }]}>{label}</Text>}
        {errorMessage && <Text style={[theme.typography.sm, { color: theme.colors.red }]}>{errorMessage}</Text>}
      </View>
    )
  );
}
