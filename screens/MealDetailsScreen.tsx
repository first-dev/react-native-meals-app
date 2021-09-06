import React, { FC, Fragment, useCallback, useLayoutEffect } from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import { DefaultTheme } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import { Chip, Divider, Card, Title } from 'react-native-paper'

import { MEALS, CATEGORIES } from '../assets/dummy-data'
import Colors from '../assets/colors'
import WaveDivider from '../components/UI/WaveDivider'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { FavoritesAction } from '../reducers/favorites'
import { MealsStackParamList } from '../navigation/MealsStackNavigator'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/UI/HeaderButton'

type Props = NativeStackScreenProps<MealsStackParamList, 'MealDetails'>

const MealDetails: FC<Props> = ({ navigation, route }) => {
  const mealId = route.params.mealId
  const meal = MEALS.find(meal => meal.id === mealId)
  const favorites = useAppSelector(state => state.favorites)
  const dispatch = useAppDispatch()
  const isFavorite = favorites.ids.includes(mealId)
  const favoritePressHandler = useCallback(() => {
    dispatch(FavoritesAction.toggleFavorite(mealId))
  }, [mealId])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName={isFavorite ? 'favorite' : 'favorite-outline'}
            onPress={favoritePressHandler}
          />
        </HeaderButtons>
      ),
    })
  }, [navigation, isFavorite, favoritePressHandler])

  const categories = CATEGORIES.filter(category =>
    meal?.categoryIds.includes(category.id)
  )
  const chipPressHandler = (
    filter: MealsStackParamList['Filters'],
    action: 'filter' | 'category' = 'filter'
  ) => {
    switch (action) {
      case 'filter':
        navigation.navigate('Filters', filter)
        break
      case 'category':
        if (filter.categoryIds?.length ?? 0 > 0) {
          if (meal?.categoryIds.length === 1) {
            navigation.navigate('CategoryMeals', {
              categoryId: filter.categoryIds![0],
            })
          } else {
            navigation.push('CategoryMeals', {
              categoryId: filter.categoryIds![0],
            })
          }
        }
        break
    }
  }
  return (
    <View style={styles.screen}>
      <ScrollView>
        <ImageBackground style={styles.image} source={{ uri: meal?.imageUrl }}>
          <View style={styles.imageDividerContainer}>
            <WaveDivider
              fill={DefaultTheme.colors.background}
              style={styles.imageDivider}
            />
          </View>
        </ImageBackground>
        <View style={styles.cardsContainer}>
          <Card style={[styles.card, styles.chipsCard]}>
            <ScrollView
              contentContainerStyle={styles.chipsScrollView}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {categories.map(category => (
                <Chip
                  key={category.id}
                  style={[styles.chip, { backgroundColor: category.color }]}
                  textStyle={styles.chipText}
                  onPress={() =>
                    chipPressHandler({ categoryIds: [category.id] }, 'category')
                  }>
                  {category.title}
                </Chip>
              ))}
            </ScrollView>
          </Card>
          {(meal?.isGlutenFree ||
            meal?.isVegan ||
            meal?.isVegetarian ||
            meal?.isLactoseFree) && (
            <Card style={[styles.card, styles.chipsCard]}>
              <ScrollView
                contentContainerStyle={styles.chipsScrollView}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {meal?.isGlutenFree && (
                  <Chip
                    style={[
                      styles.chip,
                      { backgroundColor: Colors.glutenFree },
                    ]}
                    textStyle={styles.chipText}
                    onPress={() => chipPressHandler({ isGlutenFree: true })}>
                    Gluten Free
                  </Chip>
                )}
                {meal?.isVegan && (
                  <Chip
                    style={[styles.chip, { backgroundColor: Colors.vegan }]}
                    textStyle={styles.chipText}
                    onPress={() => chipPressHandler({ isVegan: true })}>
                    Vegan
                  </Chip>
                )}
                {meal?.isVegetarian && (
                  <Chip
                    style={[
                      styles.chip,
                      { backgroundColor: Colors.vegetarian },
                    ]}
                    textStyle={styles.chipText}
                    onPress={() => chipPressHandler({ isVegetarian: true })}>
                    Vegetarian
                  </Chip>
                )}
                {meal?.isLactoseFree && (
                  <Chip
                    style={[
                      styles.chip,
                      { backgroundColor: Colors.lactoseFree },
                    ]}
                    textStyle={styles.chipText}
                    onPress={() => chipPressHandler({ isLactoseFree: true })}>
                    Lactose Free
                  </Chip>
                )}
              </ScrollView>
            </Card>
          )}
          <Card style={[styles.card, styles.chipsCard]}>
            <ScrollView
              contentContainerStyle={styles.chipsScrollView}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <Chip
                style={styles.chip}
                textStyle={[styles.chipText, styles.chipTextBlack]}
                onPress={() => chipPressHandler({ duration: meal?.duration })}>
                {meal?.duration} minutes
              </Chip>
              <Chip
                style={styles.chip}
                textStyle={[styles.chipText, styles.chipTextBlack]}
                onPress={() =>
                  chipPressHandler({ affordability: meal?.affordability })
                }>
                {meal?.affordability}
              </Chip>
              <Chip
                style={styles.chip}
                textStyle={[styles.chipText, styles.chipTextBlack]}
                onPress={() =>
                  chipPressHandler({ complexity: meal?.complexity })
                }>
                {meal?.complexity}
              </Chip>
            </ScrollView>
          </Card>
          <Title style={styles.title}>Ingredients</Title>
          <Card style={styles.card}>
            {meal?.ingredients.map((ingredient, index) => (
              <Fragment key={ingredient}>
                {index !== 0 && <Divider />}
                <Text style={styles.text}>{ingredient}</Text>
              </Fragment>
            ))}
          </Card>
          <Title style={styles.title}>Steps</Title>
          <Card style={styles.card}>
            {meal?.steps.map((step, index) => (
              <Fragment key={step}>
                {index !== 0 && <Divider />}
                <View style={styles.stepContainer}>
                  <Text style={[styles.text, styles.stepNumberText]}>
                    {index + 1}
                  </Text>
                  <Text style={styles.text}>{step}</Text>
                </View>
              </Fragment>
            ))}
          </Card>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 240,
    flexDirection: 'column-reverse',
  },
  imageDividerContainer: {
    width: '100%',
    height: 100,
    transform: [{ rotate: '180deg' }],
  },
  imageDivider: {
    height: 60,
    width: '150%',
  },
  cardsContainer: {
    padding: 4,
  },
  card: {
    margin: 4,
    padding: 8,
  },
  chipsCard: {
    paddingHorizontal: 0,
  },
  chipsScrollView: {
    paddingHorizontal: 8,
  },
  chip: {
    borderRadius: 100,
    backgroundColor: Colors.lightGray,
    elevation: 0,
    marginHorizontal: 8,
  },
  chipText: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 4,
  },
  chipTextBlack: {
    color: Colors.accentDark,
  },
  title: {
    padding: 8,
    marginHorizontal: 8,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 8,
    flexShrink: 1,
  },
  stepNumberText: {
    fontSize: 16,
    marginHorizontal: 0,
    width: 40,
    textAlign: 'center',
  },
})
export default MealDetails
