import React, { FC } from 'react'
import { HeaderButton as DefaultHeaderButton } from 'react-navigation-header-buttons'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../../assets/colors'

type HeaderButtonProps = DefaultHeaderButton['props']

const HeaderButton: FC<HeaderButtonProps> = props => {
  return (
    <DefaultHeaderButton
      {...props}
      iconSize={23}
      IconComponent={MaterialIcons}
      color={colors.primary}
    />
  )
}
export default HeaderButton
