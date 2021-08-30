import React, { FC } from 'react'
import {
  View,
  StyleProp,
  ViewStyle,
  Button as DefaultButton,
} from 'react-native'

type ButtonProps = DefaultButton['props'] & {
  style?: StyleProp<ViewStyle>
}
const Button: FC<ButtonProps> = props => {
  if (props.style === undefined) {
    return <DefaultButton {...props} />
  } else {
    return (
      <View style={props.style}>
        <DefaultButton {...props} />
      </View>
    )
  }
}

export default Button
