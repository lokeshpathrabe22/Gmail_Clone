import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NoteIcon from '@material-ui/icons/Note';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import { Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';



import "./Sidebar.css";

const Sidebar = () => {
    const user=useSelector(selectUser);

    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button 
            startIcon={<img src="plus.png" className="plus"/>}
            className="sidebar__compose"
            onClick={()=>dispatch(openSendMessage())}
            >Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={49} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={49} />
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={49} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={49} />
            <SidebarOption Icon={SendIcon} title="Sent" number={49} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={49} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={49} />
            <div className="ruler"></div>
            <h3 className="sidebaroptions__heading">Meet</h3>
            <SidebarOption Icon={VideocamIcon} title="New meeting" />
            <SidebarOption Icon={KeyboardIcon} title="Join a meeting" />
            <div className="ruler"></div>
            <h3 className="sidebaroptions__heading">Hangouts</h3>
            <div className="hangout">
                <>
                <Avatar className="avatar" src={user?.photoUrl}/>
                {/* {user.displayName}</> */}
                Username</>
                <IconButton>
                    <AddIcon/>
                </IconButton>
            </div>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
