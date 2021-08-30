import React from 'react'
import { FC } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'

type CardProps = {
  style?: StyleProp<ViewStyle>
}

const Card: FC<CardProps> = props => {
  return <View style={[styles.card, props.style]}>{props.children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    padding: 14,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 20,
    elevation: 6,
    backgroundColor: '#fff', //important to fix elevation bug
  },
})
