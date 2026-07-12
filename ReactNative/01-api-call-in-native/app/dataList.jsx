import { StyleSheet, Text, useColorScheme, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const DataList = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView safe = {true}>
      <ThemedText style = {styles.txt} title = {true} >Data List</ThemedText>
      <Spacer height={10} />
      <Link href={"/"}>
      <ThemedText
      style={{
        textDecoration: "underline",
        textDecorationStyle: "dotted"
      }}>Back to Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default DataList

const styles = StyleSheet.create({
  newItem: {
    backgroundColor: "white"
  },
    txt : {
        fontSize: 30,
        fontWeight: "bold",

    }
})