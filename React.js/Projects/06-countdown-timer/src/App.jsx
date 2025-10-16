import { useState } from 'react'
import './App.css'
import RunTimer from './Components/RunTimer'
import { useAuth0 } from "@auth0/auth0-react";


function App() {
    const { loginWithRedirect, user, isAuthenticated,logout } = useAuth0();
    console.log(user)
  return (
    <div>
            {isAuthenticated ? <div><h3>WelCome {user?.name}</h3>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='px-8 bg-amber-500 rounded-xl text-black ml-4 cursor-pointer'>Logout</button>
             <RunTimer />
            </div>: <div>
              <h3>Hello User Please login to get the CountDown Timer</h3>
              <button onClick={() => {
        loginWithRedirect()
            }} className='px-8 bg-amber-500 rounded-xl text-black ml-4 cursor-pointer'>login</button>
              </div>}
     
    </div>
  )
}

export default App
