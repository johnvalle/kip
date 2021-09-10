import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { Slider } from "react-native-elements";
import CustomCheckbox from "../CustomCheckbox";

import { PasswordFormData, theme } from "../../constants";

export default function PasswordForm() {

  const [sliderValue, setSliderValue] = useState(8);
  const { control, errors } = useFormContext<PasswordFormData>();

  return (
    <View>
      <Text style={[theme.typography.md, { color: theme.colors.primary }]}>Password Length</Text>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Slider
            value={value}
            allowTouchTrack
            step={4}
            minimumValue={8}
            maximumValue={24}
            onValueChange={(value) => {
              setSliderValue(value);
              onChange(value);
            }}
            thumbTouchSize={{ width: 24, height: 24 }}
            minimumTrackTintColor={theme.colors.primary}
            maximumTrackTintColor={theme.colors.primaryLight}
            style={{ marginVertical: 8 }}
            thumbStyle={{
              backgroundColor: theme.colors.primary,
            }}
            thumbProps={{
              children: <Text style={{ alignSelf: "center", top: 12, color: theme.colors.white }}>{sliderValue}</Text>,
            }}
          />
        )}
        name="length"
        defaultValue={8}
      />
      <Text style={[theme.typography.md, { color: theme.colors.primary }]}>Password Characters</Text>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <CustomCheckbox 
            label="Lowercase letters"
            controllerValue={value}
            controllerOnPress={(checkBoxVal) => onChange(checkBoxVal)}
            errorMessage={errors.hasLowercaseChars?.message}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "This field is required."
          },
        }}
        name="hasLowercaseChars"
        defaultValue={true}
      />
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <CustomCheckbox 
            label="Uppercase letters"
            controllerValue={value}
            controllerOnPress={(checkBoxVal) => onChange(checkBoxVal)}
          />
        )}
        name="hasUppercaseChars"
        defaultValue={false}
      />
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <CustomCheckbox 
            label="Numbers"
            controllerValue={value}
            controllerOnPress={(checkBoxVal) => onChange(checkBoxVal)}
          />
        )}
        name="hasNumbers"
        defaultValue={false}
      />
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <CustomCheckbox 
            label="Special Characters"
            controllerValue={value}
            controllerOnPress={(checkBoxVal) => onChange(checkBoxVal)}
          />
        )}
        name="hasSpecialChars"
        defaultValue={false}
      />
    </View>
  )
};
