import React, { FC, ReactNode } from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Card, Title } from 'react-native-paper'

type SettingsSectionProps = View['props'] & {
  title?: string
  children: ReactNode
  cardStyle?: StyleProp<ViewStyle>
}

const SettingsSection: FC<SettingsSectionProps> = ({
  title,
  children,
  cardStyle,
  style,
  ...rest
}) => {
  return (
    <View {...rest} style={style}>
      <Title style={styles.title}>{title}</Title>
      <Card style={[styles.card, cardStyle]}>{children}</Card>
    </View>
  )
}
export default SettingsSection
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 8,
    marginHorizontal: 8,
  },
  card: {
    margin: 4,
    padding: 8,
  },
})
