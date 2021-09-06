import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import colors from '../assets/colors'
import FavoritesStackNavigator from './FavoritesStackNavigator'
import MealsStackNavigator from './MealsStackNavigator'

const Tabs = createBottomTabNavigator()

export default () => (
  <Tabs.Navigator
    initialRouteName="All"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
    }}>
    <Tabs.Screen
      name="All"
      component={MealsStackNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="restaurant" size={24} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="FavoritesStack"
      component={FavoritesStackNavigator}
      options={{
        title: 'Favorites',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="favorite" size={24} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
)
