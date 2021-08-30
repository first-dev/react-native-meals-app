import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

import Category from '../models/Category'
import Card from './UI/Card'

type CategoryItemProps = Category & { onPress: () => void }

const CategoryItem: FC<CategoryItemProps> = props => {
  const colorStyles = StyleSheet.create({
    color: {
      backgroundColor: props.color,
      height: 90,
    },
  })
  const pressHandler = () => {
    props.onPress()
  }
  return (
    <Card style={styles.screen}>
      <TouchableNativeFeedback onPress={pressHandler} useForeground={true}>
        <View pointerEvents="box-only">
          <View style={colorStyles.color}></View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </Card>
  )
}
export default CategoryItem
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderRadius: 2,
    marginHorizontal: 4,
    marginBottom: 12,
    padding: 0,
  },
  title: {
    padding: 8,
    textAlign: 'center',
    fontFamily: 'OpenSansRegular',
    fontSize: 16,
  },
})
