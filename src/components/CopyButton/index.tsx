import React from "react";
import { Icon, Button } from "react-native-elements";
import Clipboard from 'expo-clipboard';

import { theme } from "../../constants";

type CopyButtonProps = {
  value: string;
};

export default function CopyButton({ value }: CopyButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  function handlePress() {
    setIsCopied(true);
    Clipboard.setString(value);
  }

  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return (
    <Button
      {...theme.buttons.secondary}
      onPress={handlePress}
      icon={
        <Icon name={isCopied ? "checkmark" : "clipboard-outline"} type="ionicon" color={theme.colors.primaryDark} />
      }
    />
  );
}
