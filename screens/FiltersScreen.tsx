import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { MEALS } from '../assets/dummy-data'
import MealsList from '../components/MealsList'
import { MealsStackParamList } from '../navigation/MealsStackNavigator'

type Props = DrawerScreenProps<MealsStackParamList, 'Filters'>

const FiltersScreen: FC<Props> = ({ navigation, route }) => {
  const {
    affordability,
    categoryIds,
    complexity,
    duration,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
  } = route.params

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
