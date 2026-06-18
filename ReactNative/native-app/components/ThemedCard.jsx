import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]

  return (
    <View style = {[{backgroundColor: theme.uiBackground},styles.card, style]} {...props} />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        padding: 5,
        borderRadius: 20
    }
})