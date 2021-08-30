import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationDrawerScreenComponent } from 'react-navigation-drawer'

import { MEALS } from '../assets/dummy-data'
import MealsList from '../components/MealsList'

type FiltersScreenParams = {
  categoryIds?: string[]
  affordability?: string
  complexity?: string
  duration?: number
  isGlutenFree?: boolean
  isVegan?: boolean
  isVegetarian?: boolean
  isLactoseFree?: boolean
}

const FiltersScreen: NavigationDrawerScreenComponent<FiltersScreenParams> = ({
  navigation,
}) => {
  const categoryIds = navigation.getParam('categoryIds')
  const affordability = navigation.getParam('affordability')
  const complexity = navigation.getParam('complexity')
  const duration = navigation.getParam('duration')
  const isGlutenFree = navigation.getParam('isGlutenFree')
  const isVegan = navigation.getParam('isVegan')
  const isVegetarian = navigation.getParam('isVegetarian')
  const isLactoseFree = navigation.getParam('isLactoseFree')
  const meals = MEALS.filter(
    meal =>
      (isGlutenFree === undefined || isGlutenFree === meal.isGlutenFree) &&
      (isVegan === undefined || isVegan === meal.isVegan) &&
      (isVegetarian === undefined || isVegetarian === meal.isVegetarian) &&
      (isLactoseFree === undefined || isLactoseFree === meal.isLactoseFree) &&
      (affordability === undefined || affordability === meal.affordability) &&
      (complexity === undefined || complexity === meal.complexity) &&
      (duration === undefined || duration === meal.duration) &&
      (categoryIds === undefined ||
        categoryIds.some(c => meal.categoryIds.includes(c)))
  )
  return (
    <View style={styles.screen}>
      <MealsList meals={meals} navigation={navigation as any} />
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default FiltersScreen
