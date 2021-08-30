import React, { FC } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import useDynamicDimensions from '../hooks/useDynamicDimensions'
import Meal from '../models/Meal'
import MealItem from './MealItem'

type MealsListProps = {
  meals: Meal[]
  navigation: NavigationStackProp
}

const MealsList: FC<MealsListProps> = ({ meals, navigation }) => {
  const categoryId = navigation.getParam('categoryId')
  const window = useDynamicDimensions('window')
  const numColumns = window.width > 360 ? Math.floor(window.width / 360) : 1
  const pressHandler = (mealId: string) => {
    navigation.navigate('MealDetails', { mealId })
  }

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={styles.listContentContainer}
        key={numColumns}
        numColumns={numColumns}
        data={meals}
        renderItem={({ item }) => (
          <MealItem {...item} onPress={pressHandler} style={styles.mealItem} />
        )}
      />
    </View>
  )
}
export default MealsList
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContentContainer: {
    padding: 2,
  },
  mealItem: {
    margin: 8,
  },
})
