import { Checkbox ,IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from "./Section";
import React from 'react';
import "./EmailList.css";
import EmailRow from './EmailRow';
import { useEffect,useState } from 'react';
import fire from "./firebase";

const EmailList = () => {

    const [emails, setEmails] = useState([]);
    useEffect(() => {
        fire.firestore().collection("emails").orderBy('timestamp', 'desc').onSnapshot(snapshot=>setEmails(snapshot.docs.map(doc=>({
            id:doc.id,
            data: doc.data(),
        }))))
    },[])

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon className="hide" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className="hide" />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton className="hide">
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton className="hide">
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true}/>
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green'/>
            </div>
            <div className="emailList__list">
                {emails.map(({id,data:{to , subject, message,timestamp}})=>(
                    <EmailRow
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    // time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    time={timestamp}
                />
                ))}
                
                <EmailRow
                    title="This is Title of Sample Email"
                    subject="Subject of Email"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    time="9pm"
                />
                
            </div>
        </div>
    )
}

export default EmailList;
