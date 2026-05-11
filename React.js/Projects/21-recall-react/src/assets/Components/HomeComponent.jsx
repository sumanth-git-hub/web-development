import React, { useState } from 'react'
import { ParentComponent } from './ParentComponent'
import { UserContext, WrapperComponent } from '../Contexts/UserContext'
import { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { CheckEffects } from './CheckEffects'


      

export const HomeComponent = () => {


const [showH2, setShowH2] = useState(false)


    // let userName = "Sumanth"

    // const userName = useContext(UserContext)
    const {inputUserName} = useContext(AuthContext)

    let userAge = 27
    
    function RenderH2(){
      return (
        <h2>Hello i am {inputUserName.name} and {userAge} year old</h2>
      )
    }

  const handleToggle = () => {
  setShowH2(!showH2)
}
  return (
    <div>
        <h1>Home page</h1>
        <button onClick={handleToggle}>Click Me to Toggle</button>
      {
        showH2 && <RenderH2></RenderH2>
      }  
      <ParentComponent />
      <CheckEffects />
    </div>
  )
}
