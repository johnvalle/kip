import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-get-random-values'

import * as Screens from './src/screens';
import useLoadResources from './src/hooks/useLoadResources';
import { DrawerParamList, CardStackParamList, theme, AccountStackParamList } from './src/constants';

const AccountStack = createStackNavigator<AccountStackParamList>();
const CardStack = createStackNavigator<CardStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const defaultScreenOptions = {
  cardStyle: {
    backgroundColor: theme.colors.gray[600]
  },
  headerShown: false
}

function AccountNavigator() {
  return (
    <AccountStack.Navigator initialRouteName="Home" screenOptions={defaultScreenOptions}>
      <AccountStack.Screen name="Home" component={Screens.AccountsScreen} />
    </AccountStack.Navigator>
  )
}

function CardNavigator() {
  return (
    <CardStack.Navigator initialRouteName="Home" screenOptions={defaultScreenOptions}>
      <CardStack.Screen name="Home" component={Screens.CardsScreen} />
      <CardStack.Screen name="CreateCard" component={Screens.CreateCardScreen} />
    </CardStack.Navigator>
  )
}


export default function App() {
  
  const isReady = useLoadResources();
  
  return (
    isReady && (
      <NavigationContainer>
        <Drawer.Navigator drawerPosition="right">
          <Drawer.Screen name="Accounts" component={AccountNavigator} />
          <Drawer.Screen name="Cards" component={CardNavigator} />
          <Drawer.Screen name="Generate Password" component={Screens.GeneratePasswordScreen} />
          <Drawer.Screen name="Test Password" component={Screens.TestPasswordScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  );
}