import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { NavigationDrawerProp } from 'react-navigation-drawer'

import HeaderButton from './UI/HeaderButton'

type MenuHeaderButtonProps = {
  navigation: NavigationDrawerProp
}

const MenuHeaderButton: FC<MenuHeaderButtonProps> = ({ navigation }) => {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="menu"
        iconName="menu"
        onPress={() => navigation.openDrawer()}
      />
    </HeaderButtons>
  )
}
export default MenuHeaderButton
