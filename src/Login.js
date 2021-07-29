import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './Firebase'
import './Login.css'
function Login() {
    const signIn = ()=>
    {

        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
    return (

        <div className='login'>
          
         <div className="login__logo">
         <img src="./Newdiscordlogo.png" alt='' />
         
         </div>
        <Button onClick={signIn}>Sign In</Button>
        
        </div>
    )
}

export default Login
