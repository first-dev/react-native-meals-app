import React, { FC } from 'react'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'

const getIcon = (name: string) => {
  switch (name) {
    case 'Meals':
      return 'home'
    case 'Settings':
      return 'settings'
    default:
      return undefined
  }
}

const DrawerContent: FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView>
      {props.state.routes.map(({ key, name }) => (
        <Drawer.Item
          key={key}
          label={name}
          icon={getIcon(name)}
          onPress={() => props.navigation.navigate(name)}
          active={props.descriptors[key].navigation.isFocused()}
        />
      ))}
    </DrawerContentScrollView>
  )
}
export default DrawerContent
