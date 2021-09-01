import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

import Colors from '../assets/colors'
import { ContentOptions } from './ContentOptions'

export const defaultStackConfig: Parameters<typeof createStackNavigator>[1] = {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTitleStyle: {
      fontFamily: 'OpenSansBold',
    },
    headerLeftContainerStyle: {
      marginHorizontal: 11,
      marginVertical: 3,
      padding: 3,
    },
    headerRightContainerStyle: {
      marginHorizontal: 11,
      marginVertical: 3,
      padding: 3,
    },
  },
}
export const contentOptions: ContentOptions = {
  activeTintColor: Colors.primary,
  onItemPress: () => console.log('item press'),
  itemsContainerStyle: {
    marginTop: StatusBar.currentHeight,
  },
}
