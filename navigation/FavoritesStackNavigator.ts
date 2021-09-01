import { createStackNavigator } from 'react-navigation-stack'

import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { defaultStackConfig } from './configurations'

export default createStackNavigator(
  {
    Favorites: FavoritesScreen as any,
    MealDetails: MealDetailsScreen as any,
  },
  defaultStackConfig
)
