import React, { use } from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../(auth)/GuestOnly'

const AuthLayout = () => {
  const {user} = useUser()
  // console.log(user)

  return (
   <GuestOnly>
   <StatusBar  style='auto'/>
    <Stack screenOptions={{headerShown: false,animation: "none"}}>
    </Stack>
   </GuestOnly>
  )
}

export default AuthLayout