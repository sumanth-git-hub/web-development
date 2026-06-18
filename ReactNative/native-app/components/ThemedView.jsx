import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe = false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    if(!safe) return (
    <View style = {[{
        backgroundColor: theme.background
    }, style]}
    {...props}
     />
  )
  
  const inset = useSafeAreaInsets()

  return(
       <View style = {[{
        backgroundColor: theme.background,
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
    }, style]}
    {...props}
     />
  )
}

export default ThemedView