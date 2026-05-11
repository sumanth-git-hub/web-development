
import { useState } from 'react'
import './App.css'
import { FromComponent } from './assets/Components/FromComponent'
import { HomeComponent } from './assets/Components/HomeComponent'
import { Outlet } from 'react-router-dom'
import { HeaderNavigation } from './assets/Components/HeaderNavigation'
import { WrapperComponent } from './assets/Contexts/UserContext'
import { AuthWrapper } from './assets/Contexts/AuthContext'





function App() {



  return (
    <div>
    {/* <WrapperComponent> */}
      <AuthWrapper>
      <HeaderNavigation />
      <Outlet>

      </Outlet>
      </AuthWrapper>
    {/* </WrapperComponent> */}
      <footer>
        <ul>
          <li>Links from footer</li>
        </ul>
        </footer>      
    </div>
  )
}

export default App

