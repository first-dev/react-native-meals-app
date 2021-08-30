import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { NavigationDrawerScreenComponent } from 'react-navigation-drawer'
import { Card, Title, Switch, Text, RadioButton } from 'react-native-paper'

import MenuHeaderButton from '../components/MenuHeaderButton'
import Colors from '../assets/colors'
import SettingsSection from '../components/SettingsSection'

type SettingsScreenParams = {}

const SettingsScreen: NavigationDrawerScreenComponent<SettingsScreenParams> =
  () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [theme, setTheme] = React.useState('device-theme')
    return (
      <View style={styles.screen}>
        <ScrollView>
          <SettingsSection title="Filters">
            <View style={styles.switchContainer}>
              <Text>Gluten Free</Text>
              <Switch
                value={isGlutenFree}
                onValueChange={setIsGlutenFree}
                style={styles.switch}
              />
            </View>
            <View style={styles.switchContainer}>
              <Text>Vegan</Text>
              <Switch
                value={isVegan}
                onValueChange={setIsVegan}
                style={styles.switch}
              />
            </View>
            <View style={styles.switchContainer}>
              <Text>Vegetarian</Text>
              <Switch
                value={isVegetarian}
                onValueChange={setIsVegetarian}
                style={styles.switch}
              />
            </View>
            <View style={styles.switchContainer}>
              <Text>LactoseFree</Text>
              <Switch
                value={isLactoseFree}
                onValueChange={setIsLactoseFree}
                style={styles.switch}
              />
            </View>
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
      </View>
    )
  }
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  switch: {},
})
SettingsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Settings',
  headerLeft: () => {
    return <MenuHeaderButton navigation={navigation} />
  },
})
export default SettingsScreen
