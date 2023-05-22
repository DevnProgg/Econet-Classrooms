import React from 'react'
import Login from './Components/Login'
import { BottomNavBar } from './Components/Main'

let user = 1
function App() {
  if (user){
    return (
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
