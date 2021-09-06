import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import colors from '../assets/colors'

import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import DrawerToggleButton from '../components/DrawerToggleButton'

export type FavoritesStackParamList = {
  Favorites: undefined
  MealDetails: undefined
}

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName="Favorites"
    defaultScreenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTitleStyle: {
        fontFamily: 'OpenSansBold',
      },
    }}>
    <Stack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={({ navigation }) => ({
        title: 'Favorite Meals',
        headerLeft: props => <DrawerToggleButton {...props} />,
      })}
    />
    <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
  </Stack.Navigator>
)
