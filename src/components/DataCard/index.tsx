import React from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import { theme } from "../../constants";

import styles from "./styles";

type DataCardProps = {
  title: string;
  subtitle: string;
  onButtonPress?: () => void;
};

export default function DataCard(props: DataCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[theme.typography.md, { color: theme.colors.primary }]}>{props.title}</Text>
        <Text style={[theme.typography.sm, { color: theme.colors.primaryDark }]}>{props.subtitle}</Text>
      </View>
      <Button
        type="clear"
        buttonStyle={theme.buttons.icon}
        icon={<Icon name="ellipsis-horizontal" type="ionicon" color={theme.colors.primary} />}
        onPress={props?.onButtonPress}
        background={theme.ripple}
      />
    </View>
  );
};
