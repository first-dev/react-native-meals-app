import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationDrawerScreenComponent } from 'react-navigation-drawer'

import { MEALS } from '../assets/dummy-data'
import MealsList from '../components/MealsList'
import MenuHeaderButton from '../components/MenuHeaderButton'

type FavoritesScreenParams = {}

const FavoritesScreen: NavigationDrawerScreenComponent<FavoritesScreenParams> =
  ({ navigation }) => {
    const meals = MEALS.filter(meal => meal.duration < 60)
    return (
      <View style={styles.screen}>
        <MealsList meals={meals} navigation={navigation as any} />
      </View>
    )
  }
FavoritesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Favorite Meals',
  headerLeft: () => {
    return <MenuHeaderButton navigation={navigation} />
  },
})
export default FavoritesScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
