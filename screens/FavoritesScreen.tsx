import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { MEALS } from '../assets/dummy-data'
import MealsList from '../components/MealsList'
import { useAppSelector } from '../hooks/redux'
import { FavoritesStackParamList } from '../navigation/FavoritesStackNavigator'

type Props = DrawerScreenProps<FavoritesStackParamList, 'Favorites'>

const FavoritesScreen: FC<Props> = ({ navigation }) => {
  const favorites = useAppSelector(state => state.favorites)
  const meals = MEALS.filter(meal => favorites.ids.includes(meal.id))
  return (
    <View style={styles.screen}>
      <MealsList meals={meals} navigation={navigation as any} />
    </View>
  )
}
export default FavoritesScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
