import React from 'react'
import { Button, Icon } from 'react-native-elements';
import { theme } from '../../constants';

import styles from './styles';

type CreateButtonProps = {
  onButtonPress: () => void;
}

export default function CreateButton(props: CreateButtonProps) {
  return (
    <Button 
      icon={
        <Icon 
          name="add-outline" 
          type="ionicon" 
          color={theme.colors.white} 
        />
      }
      buttonStyle={styles.button}
      containerStyle={styles.container}
      onPress={props.onButtonPress}
    />
  )
}