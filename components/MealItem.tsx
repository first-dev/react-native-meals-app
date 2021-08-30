import React, { FC } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StyleProp,
  ViewStyle,
  TouchableNativeFeedback,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Meal from '../models/Meal'
import Card from './UI/Card'
import Colors from '../assets/colors'

type MealItemProps = Meal & {
  style?: StyleProp<ViewStyle>
  onPress: (id: string) => void
}

const MealItem: FC<MealItemProps> = props => {
  const favoritePressHandler = () => {}
  return (
    <TouchableNativeFeedback onPress={() => props.onPress(props.id)}>
      <View style={[styles.screen, props.style]}>
        <Card style={styles.card}>
          <ImageBackground
            style={styles.image}
            source={{ uri: props.imageUrl }}>
            <View style={styles.detailsContainer}>
              <View style={styles.durationContainer}>
                <View style={styles.duration}>
                  <Text style={styles.durationText}>
                    {props.duration.toString()}
                  </Text>
                </View>
              </View>
              <View style={styles.attributesContainer}>
                {props.isVegetarian && (
                  <View
                    style={[
                      styles.attribute,
                      { backgroundColor: Colors.vegetarian },
                    ]}></View>
                )}
                {props.isVegan && (
                  <View
                    style={[
                      styles.attribute,
                      { backgroundColor: Colors.vegan },
                    ]}></View>
                )}
                {props.isGlutenFree && (
                  <View
                    style={[
                      styles.attribute,
                      { backgroundColor: Colors.glutenFree },
                    ]}></View>
                )}
                {props.isLactoseFree && (
                  <View
                    style={[
                      styles.attribute,
                      { backgroundColor: Colors.lactoseFree },
                    ]}></View>
                )}
              </View>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('white', true)}
                useForeground
                onPress={favoritePressHandler}>
                <View style={styles.favoriteButton}>
                  <MaterialIcons
                    name="favorite-outline"
                    size={26}
                    color="white"
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </ImageBackground>
        </Card>
      </View>
    </TouchableNativeFeedback>
  )
}
export default MealItem
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: 0,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
  },
  detailsContainer: {
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationContainer: {
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  duration: {
    backgroundColor: 'white',
    borderRadius: 100,
    paddingVertical: 3,
    paddingHorizontal: 8,
    overflow: 'hidden',
    elevation: 4,
  },
  durationText: {
    textAlign: 'center',
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    margin: 6,
    top: 0,
    right: 0,
  },
  attributesContainer: {
    flexDirection: 'row-reverse',
    height: 24,
  },
  attribute: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    marginHorizontal: 2,
    elevation: 4,
    borderColor: 'white',
    borderWidth: 1,
  },
  titleContainer: {
    width: '100%',
    backgroundColor: '#ffffffc0',
    padding: 8,
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 18,
  },
})
