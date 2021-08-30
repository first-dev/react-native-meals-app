import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { NavigationDrawerScreenComponent } from 'react-navigation-drawer'

import { CATEGORIES } from '../assets/dummy-data'
import CategoryItem from '../components/CategoryItem'
import useDynamicDimensions from '../hooks/useDynamicDimensions'
import MenuHeaderButton from '../components/MenuHeaderButton'

const CategoriesScreen: NavigationDrawerScreenComponent = ({ navigation }) => {
  const window = useDynamicDimensions('window')
  const numColumns = window.width > 180 ? Math.floor(window.width / 180) : 1
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        key={numColumns}
        numColumns={numColumns}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryItem
            {...item}
            onPress={() =>
              navigation.navigate('CategoryMeals', { categoryId: item.id })
            }
          />
        )}
      />
    </View>
  )
}
CategoriesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Meals Categories',
  headerLeft: () => {
    return <MenuHeaderButton navigation={navigation} />
  },
})
export default CategoriesScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 12,
  },
})
