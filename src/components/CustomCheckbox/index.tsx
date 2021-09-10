import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { theme } from '../../constants';

import styles from './styles';

type CustomCheckBoxProps = {
  label: string;
  controllerValue?: boolean;
  errorMessage?: string;
  controllerOnPress: (e: boolean) => void;
};

export default function CustomCheckBox({
  label,
  errorMessage,
  controllerValue,
  controllerOnPress,
}: CustomCheckBoxProps) {

  const [value, setValue] = React.useState(controllerValue ? controllerValue : false);

  React.useEffect(() => {
    controllerOnPress(value);
  }, [value])

  return (
    <>
      <TouchableOpacity 
        style={styles.container} 
        onPress={() => setValue(!value)}
      >
        <View style={[styles.checkbox, {...controllerValue ? styles.checkboxChecked : styles.checkboxUnchecked}]}>
          {controllerValue && (
            <Icon
              name="checkmark"
              type="ionicon"
              color={theme.colors.white}
            />
          )}
        </View>
        <View>
          <Text style={{ fontFamily: theme.fonts.regular, color: theme.colors.primaryDark }}>{label}</Text>
          {errorMessage && <Text style={[theme.typography.sm, { color: theme.colors.red }]}>{errorMessage}</Text>}
        </View>
      </TouchableOpacity>
      
    </>
  )
}