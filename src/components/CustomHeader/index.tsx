import React from "react";
import { Button, Header, Icon,  } from "react-native-elements";
import { TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import { DrawerParamList, theme } from "../../constants";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

function Logo() {
  return (
    <Image 
      style={{ width: 36 }} 
      source={require("../../../assets/kip.png")} 
      resizeMode="contain" 
    />
  )
}

function MenuButton() {

  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <Button
      buttonStyle={theme.buttons.icon}
      onPress={() => navigation.toggleDrawer()}
      icon={<Icon name="menu" type="ionicon" color={theme.colors.primary} />}
      background={theme.ripple}
    />
  );
}

export default function CustomHeader() {
  return (
    <>
      <StatusBar translucent />
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={<Logo />}
        rightComponent={<MenuButton />}
      />
    </>
  );
}
