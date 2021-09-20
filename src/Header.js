import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import TuneIcon from '@material-ui/icons/Tune';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { auth } from './firebase';

const Header = () => {
    const user=useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout());
        })
    }

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img  src="Gmail_image.webp" alt="gmail_icon" />
            </div>
            <div className="header_middle">
                <div className="search__mail">
                <SearchIcon/>
                <input placeholder="Search mail" type="text" />
                <TuneIcon className="header__inputCaret" />
                </div>
            </div>
            <div className="header_right">
                <IconButton className="hide">
                    <HelpOutlineIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
                <IconButton className="hide">
                    <AppsIcon/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header;
