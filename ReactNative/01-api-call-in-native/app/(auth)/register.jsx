import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Link, useRouter } from 'expo-router'
import { useSignUp } from '@clerk/clerk-expo'
import ThemedTextInput from '../../components/ThemedTextInput'

const Register = () => {
    const {signUp, isLoaded, setActive} = useSignUp()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState({
      firstName: "",
      lastName: ""
    })
    const router = useRouter()
    const [loginError, setLoginError] = useState(null)
    
    const onSignUp = async () => {
      if(!isLoaded) return

      if (!email || !password || !userName.firstName || !userName.lastName) {
      console.log("Missing fields");
      return;
    }

      try {
        await signUp.create({
            emailAddress: email,
            password: password,
            firstName: userName.firstName,
            lastName: userName.lastName,
          })
          //sending otp to email address
          await signUp.prepareEmailAddressVerification({
            strategy: "email_code"
          })

          //navigate to otp screen
          router.push("/verify")

      } catch (error) {
            // setLoginError(error.message)
            setLoginError(error?.errors?.[0]?.message || "Something went wrong")
          console.log("ERROR:", JSON.stringify(error, null, 2));
      }
      
    }
  return (
    <ThemedView safe = {true}>
      <Pressable style = {{flex: 1}} onPress={Keyboard.dismiss}>

    <ThemedText title = {true}>Register for an Account</ThemedText>

        <Spacer />
        <ThemedTextInput placeholder = "First name" onChangeText = {(text) => 
          setUserName((prev) => ({
            ...prev, firstName: text
          }))
        } />
        <ThemedTextInput placeholder = "Last name" onChangeText = {(text) => 
          setUserName((prev) => ({
            ...prev, lastName: text
          }))
        } />
        <ThemedTextInput placeholder='Email' onChangeText={setEmail} />
        <ThemedTextInput placeholder='Password' secureTextEntry onChangeText={setPassword} />
              <ThemedButton title = "Sign up" onPress = {onSignUp}>
        <ThemedText
          style={{
            color: "#f2f2f2",
          }}
        >
          Register
        </ThemedText>
      </ThemedButton>
    <Spacer height={20} />
    { loginError && <ThemedText style={{
      color: "red",      
    }}>{loginError}</ThemedText>}
      <Spacer height={20} />

        <Link href={"/login"}>
        <ThemedText style = {styles.btnText}>Login Instead</ThemedText>
        </Link>

      </Pressable>
        
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  btnText: {
    color: 'blue',
    textDecorationLine: "underline",
    fontWeight: 600
  }
})
