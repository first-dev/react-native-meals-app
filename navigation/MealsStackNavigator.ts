import { createStackNavigator } from 'react-navigation-stack'
import { defaultStackConfig } from './configurations'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import FiltersScreen from '../screens/FiltersScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

export default createStackNavigator(
  {
    Categories: CategoriesScreen as any,
    CategoryMeals: CategoryMealsScreen as any,
    MealDetails: MealDetailsScreen as any,
    Filters: FiltersScreen as any,
  },
  defaultStackConfig
)
