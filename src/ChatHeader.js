import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import React from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import './ChatHeader.css'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import { useSelector } from 'react-redux';
import { channelName } from './features/appSlice';
function ChatHeader() {
    const cname=useSelector(channelName);
    return (
        <div className='chatHeader'>
           
           <div className="chatHeader__left">
       <h3><span className="chatheader__hash">
           #</span> {cname} </h3>
           </div>
           <div className="chatHeader__right">
    <NotificationsIcon/>
    <EditLocationRoundedIcon/>
    <PeopleAltRoundedIcon/>
    <div className="chatHeader__search">
        <input placeholder='Search' />
        <SearchRoundedIcon/>
    </div>
    <SendRoundedIcon/>
    <HelpRoundedIcon/>
           </div>
        </div>
    )
}

export default ChatHeader
