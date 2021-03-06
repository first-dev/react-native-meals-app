import React, { useState } from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'

import store from './store/index'
import MainNavigator from './navigation/MainNavigator'
import Colors from './assets/colors'

enableScreens()
const loadFonts = () =>
  Font.loadAsync({
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accentLight,
  },
}

export default function App() {
  const [areAssetsLoaded, setAreAssetsLoaded] = useState(false)

  if (!areAssetsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setAreAssetsLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: props => <MaterialIcons {...props} name={props.name as any} />,
      }}>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ReduxProvider>
    </PaperProvider>
  )
}
