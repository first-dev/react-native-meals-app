import { ViewStyle, StyleProp, TextStyle } from 'react-native'

export interface ContentOptions {
  /**
   * the array of routes, can be modified or overridden
   */
  items?: NavigationRoute[]
  /**
   * key identifying the active route
   */
  activeItemKey?: string
  /**
   * label and icon color of the active label
   */
  activeTintColor?: string
  /**
   * background color of the active label
   */
  activeBackgroundColor?: string
  /**
   * label and icon color of the inactive label
   */
  inactiveTintColor?: string
  /**
   * background color of the inactive label
   */
  inactiveBackgroundColor?: string
  /**
   * function to be invoked when an item is pressed
   */
  onItemPress?: (info: DrawerItem) => void
  /**
   * style object for the content section
   */
  itemsContainerStyle?: StyleProp<ViewStyle>
  /**
   * style object for the single item, which can contain an Icon and/or a Label
   */
  itemStyle?: StyleProp<ViewStyle>
  /**
   * style object to overwrite Text style inside content section, when your label is a string
   */
  labelStyle?: StyleProp<TextStyle>
  /**
   * style object to overwrite Text style of the active label, when your label is a string (merged with labelStyle)
   */
  activeLabelStyle?: StyleProp<TextStyle>
  /**
   * style object to overwrite Text style of the inactive label, when your label is a string (merged with labelStyle)
   */
  inactiveLabelStyle?: StyleProp<TextStyle>
  /**
   * style object to overwrite View icon container styles
   */
  iconContainerStyle?: StyleProp<ViewStyle>
}

export interface DrawerItem {
  route: NavigationRoute
  focused: boolean
}

export type NavigationRoute<Params = NavigationParams> =
  | NavigationLeafRoute<Params>
  | NavigationStateRoute<Params>

export interface NavigationLeafRoute<Params = NavigationParams> {
  /**
   * React's key used by some navigators. No need to specify these manually,
   * they will be defined by the router.
   */
  key: string
  /**
   * Index that represents the depth of the stack
   */
  index: number
  /**
   * For example 'Home'.
   * This is used as a key in a route config when creating a navigator.
   */
  routeName: string
  /**
   * Path is an advanced feature used for deep linking and on the web.
   */
  path?: string
  /**
   * Params passed to this route when navigating to it,
   * e.g. `{ car_id: 123 }` in a route that displays a car.
   */
  params?: Params
  /**
   * Array containing the navigator's routes
   */
  routes: NavigationRoute[]
  /**
   * Flag that indicates the transition state of the route
   */
  isTransitioning: boolean
}

export type NavigationStateRoute<NavigationLeafRouteParams> =
  NavigationLeafRoute<NavigationLeafRouteParams> & NavigationState
