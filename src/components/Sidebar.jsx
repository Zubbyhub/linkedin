import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';

const Sidebar = () => {

    const recentItem = (topic)=> (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhfyOPrIx8sNuSX-wkrgaKDo_TrSzrvUYbxZmefpdvA&s" alt="" />
                <Avatar className='sidebar_avatar' />
                <h2>Zubby Wisdom</h2>
                <h4>nzubechukwuwisdom@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">5,875</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">4,362</p>
                </div>
            </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("webdeveloper")}
                {recentItem("design")}
                {recentItem("node.js")}
                {recentItem("softwareengineering")}
            </div>
        </div>
    )
}

export default Sidebar
