import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SelectionsScreen from '../screens/SelectionsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AmountScreen from '../screens/AmountScreen';
import PreferenceScreen from '../screens/PreferenceScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Selections: SelectionsScreen,
  Preference: PreferenceScreen,
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
  tabBarLabel: 'E-Wallet',
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
  tabBarLabel: 'E-Wallet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const PreferenceStack = createStackNavigator({
  Preference: PreferenceScreen,
});

PreferenceStack.navigationOptions = {
  tabBarLabel: 'E-Wallet',
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
  PreferenceStack,
  SettingsStack,
});
