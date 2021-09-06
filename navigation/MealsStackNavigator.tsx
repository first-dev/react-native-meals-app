import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import FiltersScreen from '../screens/FiltersScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { CATEGORIES } from '../assets/dummy-data'
import DrawerToggleButton from '../components/DrawerToggleButton'

export type MealsStackParamList = {
  Categories: undefined
  CategoryMeals: { categoryId: string }
  MealDetails: {
    mealId: string
    favoritePressHandler: () => void
    isFavorite: boolean
  }
  Filters: {
    categoryIds?: string[]
    affordability?: string
    complexity?: string
    duration?: number
    isGlutenFree?: boolean
    isVegan?: boolean
    isVegetarian?: boolean
    isLactoseFree?: boolean
  }
}

const Stack = createNativeStackNavigator<MealsStackParamList>()

export default () => (
  <Stack.Navigator initialRouteName="Categories">
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: 'Meals Categories',
        headerLeft: props => <DrawerToggleButton {...props} />,
      }}
    />
    <Stack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={({ route }) => {
        const categoryId = route.params.categoryId
        const category = CATEGORIES.find(category => category.id === categoryId)
        return {
          title: category?.title,
          headerStyle: {
            backgroundColor: category?.color,
          },
          headerTintColor: 'white',
        }
      }}
    />
    <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
    <Stack.Screen name="Filters" component={FiltersScreen} />
  </Stack.Navigator>
)
