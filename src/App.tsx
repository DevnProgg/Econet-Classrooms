import React, { useState } from 'react'
import Login from './Components/Login'
import { BottomNavBar } from './Components/Main'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
 if (isAuth){
  return(
    <>
    <BottomNavBar />
    </>
  )
 }else{
  return(
      <>
      <Login />
      </>
    )
  }
}

export default App
