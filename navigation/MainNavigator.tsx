import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import colors from '../assets/colors'
import BottomTabNavigator from './BottomTabNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import DrawerContent from '../components/DrawerContent'

const Drawer = createDrawerNavigator()

export default () => (
  <Drawer.Navigator
    initialRouteName="Meals"
    drawerContent={props => <DrawerContent {...props} />}
    defaultScreenOptions={{
      drawerActiveTintColor: colors.primary,
    }}>
    <Drawer.Screen
      name="Meals"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
)
