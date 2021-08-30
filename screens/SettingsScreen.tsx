import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { NavigationDrawerScreenComponent } from 'react-navigation-drawer'
import { RadioButton } from 'react-native-paper'

import MenuHeaderButton from '../components/MenuHeaderButton'
import SettingsSection from '../components/SettingsSection'
import SwitchItem from '../components/UI/SwitchItem'

type SettingsScreenParams = {}

const SettingsScreen: NavigationDrawerScreenComponent<SettingsScreenParams> =
  () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [theme, setTheme] = useState('device-theme')
    return (
      <ScrollView contentContainerStyle={styles.screen}>
        <SettingsSection title="Filters">
          <SwitchItem
            label="Gluten free"
            value={isGlutenFree}
            onValueChange={setIsGlutenFree}
          />
          <SwitchItem
            label="Vegan"
            value={isVegan}
            onValueChange={setIsVegan}
          />
          <SwitchItem
            label="Vegetarian"
            value={isVegetarian}
            onValueChange={setIsVegetarian}
          />
          <SwitchItem
            label="Lactose free"
            value={isLactoseFree}
            onValueChange={setIsLactoseFree}
          />
        </SettingsSection>
        <SettingsSection title="Theme">
          <RadioButton.Group
            onValueChange={theme => setTheme(theme)}
            value={theme}>
            <RadioButton.Item label="Use device theme" value="device-theme" />
            <RadioButton.Item label="Light theme" value="light" />
            <RadioButton.Item label="Dark theme" value="dark" />
          </RadioButton.Group>
        </SettingsSection>
      </ScrollView>
    )
  }
const styles = StyleSheet.create({
  screen: {},
})
SettingsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Settings',
  headerLeft: () => {
    return <MenuHeaderButton navigation={navigation} />
  },
})
export default SettingsScreen
