import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SelectionsScreen from '../screens/SelectionsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AmountScreen from '../screens/AmountScreen';

const HomeStack = createStackNavigator({
  Home: SelectionsScreen,
  Selections: HomeScreen,
  Amount: AmountScreen,
  Settings: SettingsScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SelectionsStack = createStackNavigator({
  Selections: SelectionsScreen,
});

SelectionsStack.navigationOptions = {
  tabBarLabel: 'SelectionsScreen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const AmountStack = createStackNavigator({
  Amount: AmountScreen,
});

AmountStack.navigationOptions = {
  tabBarLabel: 'DirectPay',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SelectionsStack,
  AmountStack,
  SettingsStack,
});
