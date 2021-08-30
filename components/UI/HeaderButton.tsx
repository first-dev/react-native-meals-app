import React, { FC } from 'react'
import { HeaderButton as DefaultHeaderButton } from 'react-navigation-header-buttons'
import { MaterialIcons } from '@expo/vector-icons'

type HeaderButtonProps = DefaultHeaderButton['props']

const HeaderButton: FC<HeaderButtonProps> = props => {
  return (
    <DefaultHeaderButton
      {...props}
      iconSize={23}
      IconComponent={MaterialIcons}
      color={'white'}
    />
  )
}
export default HeaderButton
