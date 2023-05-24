import React from 'react'
import {notifications} from '../db.js'


export default function NotificationsPopup(){

    return(
        <div className="notificationsPopupContainer">
            
            <div className="notification">
                <div className="notificationsNickname">RS</div>
                 <div className="noti">
                <h4 className='notiName'>Kaleem Ullah</h4>
                 <p className='notiPara'>has submitted a new name change request</p>
                 </div>
            </div>
            <div className="notification">
                <div className="notificationsNickname">RS</div>
                <div className="noti">
                <h4 className='notiName'>Kaleem Ullah</h4>
                 <p className='notiPara'>has submitted a new name change request</p>
                 </div>
            </div>
            <div className="notification">
                <div className="notificationsNickname">RS</div>
                 <div className="noti">
                <h4 className='notiName'>Kaleem Ullah</h4>
                 <p className='notiPara'>has submitted a new name change request</p>
                 </div>
            </div> 
        </div>
    )
}