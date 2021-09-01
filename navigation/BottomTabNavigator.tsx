import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import colors from '../assets/colors'
import FavoritesStackNavigator from './FavoritesStackNavigator'
import MealsStackNavigator from './MealsStackNavigator'

export default createBottomTabNavigator(
  {
    Meals: {
      screen: MealsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'All',
        tabBarIcon: navInfo => {
          return (
            <MaterialIcons
              name="restaurant"
              size={24}
              color={navInfo.tintColor}
            />
          )
        },
      },
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: navInfo => {
          return (
            <MaterialIcons
              name="favorite"
              size={24}
              color={navInfo.tintColor}
            />
          )
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.accentLight,
      showLabel: false,
      style: {
        height: 60,
      },
    },
  }
)
