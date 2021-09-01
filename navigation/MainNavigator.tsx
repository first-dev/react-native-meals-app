import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import contentOptions from './contentOptions'
import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent'
import BottomTabNavigator from './BottomTabNavigator'
import SettingsStackNavigator from './SettingsStackNavigator'

const DrawerNavigator = createDrawerNavigator(
  {
    Meals: BottomTabNavigator,
    Settings: SettingsStackNavigator,
  },
  {
    contentOptions,
    contentComponent: CustomDrawerContentComponent,
  }
)

export default createAppContainer(DrawerNavigator)
