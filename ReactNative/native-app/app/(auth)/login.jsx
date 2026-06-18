import { ActivityIndicator, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { use, useContext, useState } from 'react'

//themed components instead of regular native components
import ThemedView from "../../components/ThemedView.jsx";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors.js';
import ThemedPressable from '../../components/ThemedPressable.jsx';
import ThemedTextInput from '../../components/ThemedTextInput.jsx';
import { useUser } from '../../hooks/useUser';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, login} = useUser()
  const [error, setError] = useState(null)

    const handleSubmit = async () => {
      setError(null)
        try {
          await login(email, password)
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style = {styles.container}>
        <Spacer />

      <ThemedText title = {true} style = {styles.title}>Login to Your Account</ThemedText>
        <Spacer />
        <ThemedTextInput placeholder = "Email Id" keyBoardType = "email-address"
        onChangeText= {setEmail}
        value = {email}
        style={{
          width: '80%',
          marginBottom: 20,
        }} />
        <ThemedTextInput placeholder = "Password"
        onChangeText= {setPassword}
        value = {password}
        secureTextEntry={true}
        style={{
          width: '80%',
          marginBottom: 20,
        }} />
        <ThemedPressable onPress = {handleSubmit}>
            <Text style  = {{color: '#f2f2f2'}}>Login</Text>
        </ThemedPressable>
        <Spacer />
        {error && <Text style = {styles.error}>{error}</Text>}
      <Spacer height={100} />
      <Link href = "/register">
      <ThemedText>Register Instead</ThemedText>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
    title: {
    fontWeight: "bold",
    fontSize: 18,
  }
  ,error :{
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10
  }
})