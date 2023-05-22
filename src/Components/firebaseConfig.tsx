import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import Cookies from 'universal-cookie'

import { initializeApp } from "firebase/app"
const firebaseConfig = {

    apiKey: "AIzaSyA37AqPkZ7gHnSN998fB8wCmj-hyrJURzE",
  
    authDomain: "mainapp-2e71c.firebaseapp.com",
  
    projectId: "mainapp-2e71c",
  
    storageBucket: "mainapp-2e71c.appspot.com",
  
    messagingSenderId: "495936949546",
  
    appId: "1:495936949546:web:8f776162cf8a306b00e253"
  
  }

  const app = initializeApp(firebaseConfig)  

  export const auth = getAuth(app)

  const provider = new GoogleAuthProvider()

  const cookies = new Cookies()
  export const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result)=>{
                console.log(result)
                cookies.set('auth-token', result.user.refreshToken)
        }).catch((error) =>{
            console.log(error)
        })
}

