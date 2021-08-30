import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

import { CATEGORIES, MEALS } from '../assets/dummy-data'
import MealsList from '../components/MealsList'

type CategoryMealsScreenParams = { categoryId: string }

const CategoryMealsScreen: NavigationStackScreenComponent<CategoryMealsScreenParams> =
  ({ navigation }) => {
    const categoryId = navigation.getParam('categoryId')
    const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

    return (
      <View style={styles.screen}>
        <MealsList meals={meals} navigation={navigation} />
      </View>
    )
  }
CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const category = CATEGORIES.find(
    category => category.id === navigation.getParam('categoryId')
  )
  return {
    title: category?.title,
    headerStyle: {
      backgroundColor: category?.color,
    },
  }
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
