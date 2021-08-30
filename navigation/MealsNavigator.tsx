import React from 'react'
import { StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { MaterialIcons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import SettingsScreen from '../screens/SettingsScreen'

import Colors from '../assets/colors'
import { ContentOptions } from './ContentOptions'
import CustomDrawerContentComponent from '../components/CustomDrawerContentComponent '

const defaultStackConfig: Parameters<typeof createStackNavigator>[1] = {
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

const MealsStackNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen as any,
    CategoryMeals: CategoryMealsScreen as any,
    MealDetails: MealDetailsScreen as any,
    Filters: FiltersScreen as any,
  },
  defaultStackConfig
)
const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen as any,
    MealDetails: MealDetailsScreen as any,
  },
  defaultStackConfig
)

const BottomTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'All',
        tabBarIcon: navInfo => {
          return (
            <MaterialIcons
              name="restaurant"
              size={24}
              color={navInfo.tintColor}
            />
          )
        },
      },
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: navInfo => {
          return (
            <MaterialIcons
              name="favorite"
              size={24}
              color={navInfo.tintColor}
            />
          )
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentLight,
      showLabel: false,
      style: {
        height: 60,
      },
    },
  }
)

const SettingsStackNavigator = createStackNavigator(
  {
    Settings: SettingsScreen as any,
  },
  defaultStackConfig
)
const contentOptions: ContentOptions = {
  activeTintColor: Colors.primary,
  onItemPress: () => console.log('item press'),
  itemsContainerStyle: {
    marginTop: StatusBar.currentHeight,
  },
}
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
