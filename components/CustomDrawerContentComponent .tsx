import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { DrawerContentComponentProps } from 'react-navigation-drawer/lib/typescript/src/types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

import DrawerItem from '../components/modified-paper/DrawerItem'
import { Drawer } from 'react-native-paper'

const getIcon = (key: string) => {
  switch (key) {
    case 'Meals':
      return 'home'
    case 'Settings':
      return 'settings'
    default:
      return undefined
  }
}

const CustomDrawerContentComponent: FC<DrawerContentComponentProps> = props => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {props.items.map(({ routeName, key }) => (
          <DrawerItem
            style={styles.item}
            key={key}
            active={props.activeItemKey === key}
            icon={getIcon(key)}
            label={routeName}
            onPress={() => props.navigation.navigate(routeName)}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  )
}
export default CustomDrawerContentComponent

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  item: {
    padding: 8,
  },
})
