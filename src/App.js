import React from 'react';


import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { login, selectUser, logout } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './Firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const user= useSelector(selectUser);

  useEffect(() => {
   auth.onAuthStateChanged((authUser)=>{
     console.log("here is our", authUser);
     if(authUser) //user is logged in 
     {
    dispatch(login(
      {uid: authUser.uid,
      photo: authUser.photoURL,
      email: authUser.email,
      displayName: authUser.displayName,}
    ));
     }
     else{   //the user is logged out
    dispatch(logout());
     }

     }
   )
  }, [dispatch])

  return (
    <div className="App">
   {user ? 
  <>
     {/*sidebar */}
     <Sidebar/>
{/*chat component*/}
<Chat/>
</>:
<Login/>
  }
  
    </div>
    
  );
}


export default App;
