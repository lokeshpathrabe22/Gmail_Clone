import { IconButton } from '@material-ui/core';
import React from 'react';
import "./SidebarOption.css";

const Sideoption = () => {
    return (
        <div className="sideoptions">
            <IconButton>
                <img src="Calender_icon.svg" alt="" />
            </IconButton>
        </div>
    )
}

export default Sideoption;
