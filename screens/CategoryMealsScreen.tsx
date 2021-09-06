import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { MEALS } from '../assets/dummy-data'
import MealsList from '../components/MealsList'
import { MealsStackParamList } from '../navigation/MealsStackNavigator'

type Props = DrawerScreenProps<MealsStackParamList, 'CategoryMeals'>

const CategoryMealsScreen: FC<Props> = ({ navigation, route }) => {
  const categoryId = route.params.categoryId
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

  return (
    <View style={styles.screen}>
      <MealsList meals={meals} navigation={navigation} />
    </View>
  )
}
export default CategoryMealsScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
