import { createStackNavigator } from 'react-navigation-stack'

import SettingsScreen from '../screens/SettingsScreen'
import { defaultStackConfig } from './configurations'

export default createStackNavigator(
  {
    Settings: SettingsScreen as any,
  },
  defaultStackConfig
)
