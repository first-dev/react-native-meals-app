import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { CATEGORIES } from '../assets/dummy-data'
import CategoryItem from '../components/CategoryItem'
import useDynamicDimensions from '../hooks/useDynamicDimensions'
import { MealsStackParamList } from '../navigation/MealsStackNavigator'

type Props = DrawerScreenProps<MealsStackParamList, 'Categories'>

const CategoriesScreen: FC<Props> = ({ navigation }) => {
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
