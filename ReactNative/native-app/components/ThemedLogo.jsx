import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/img/logo-dark.png'
import LightLogo from '../assets/img/logo-light.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === "dark" ? DarkLogo : LightLogo
  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo