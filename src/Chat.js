import React, { useEffect } from 'react';
import ChatHeader from './ChatHeader';
import './Chat.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { channelId, channelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './Firebase';
import firebase from 'firebase';
import { MessageSharp } from '@material-ui/icons';


function Chat() {
   const [input,setInput] =useState("");
   const [messages,setMessages]=useState([]);
  const cId= useSelector(channelId);
  const user=useSelector(selectUser);
  const cName=useSelector(channelName);
  useEffect(()=>{
        if(cId)
        {
            db.collection('channels')
            .doc(cId)
            .collection('messages')
            .orderBy("timestamp","asc")
            .onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=> doc.data())));
        }
    },[cId]);
  const sendMessage = (e)=>
  {
  e.preventDefault();
  db.collection('channels').doc(cId).collection('messages').add(
      {  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          messages:input,
          user:user
      }

     
  )
  setInput("");

  }
    return (
        <div className='chat'>
           
           <ChatHeader/>
           <div className="chat__messages">
              {messages.map((messages)=>
             (<Message 
             timestamp={ new Date(messages.timestamp?.toDate()).toUTCString()}
             messages={messages.messages}
             user={messages.user}
             /> ))}
               
               

           </div>
           <div className="chat__input">
               <AddCircleIcon fontSize='large'/>
               <form >
                   <input disabled={!cId} value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${cName}`} />
                   <button disable={!cId} className='chat__inputButton' type='submit' onClick={sendMessage}>Send Message</button>
               </form>
               <div className="chat__inputIcons">
                   <CardGiftcardIcon fontSize='large'/>
                   <GifIcon fontSize='large'/>
                   <EmojiEmotionsIcon fontSize='large'/>
               </div>

           </div>

        </div>
    )
}

export default Chat;
