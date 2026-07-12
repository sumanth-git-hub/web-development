import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedText = ({style, title = false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const textColor = title ? theme.title : theme.text
    const textSize = title ? theme.titleFontSize : theme.fontSize
  return (
    <Text style = {[{color: textColor, fontSize: textSize, textAlign: "center"}, style]} {...props} />
  )
}

export default ThemedText