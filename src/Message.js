import { Avatar } from '@material-ui/core';
import React from 'react'
import './Message.css';
function Message({timestamp,user,messages}) {
    return (
        <div className='message'>
           
            <Avatar src={user.photo}/>
            <div className="message__info">
            <h4>{user.displayName} <span className='message__timestamp'>{timestamp}
                </span></h4>
                <p>{messages}</p>
                </div>
        </div>
    )
}

export default Message
