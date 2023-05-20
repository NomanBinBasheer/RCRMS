import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { CurrentUserContext } from '../App';


export default function LogoutHeader(){
    const currentUser = useContext(CurrentUserContext)

   console.log(currentUser)
    return(
        <header className="logoutHeader">
            <h2>Record Change Request Management System (RCRMS)</h2>
            <div className="logoutContainer">
              <div className={`bellIcon ${currentUser.isAdmin ? "greenBellIcon" : "blueBellIcon"}`}>
                    <FontAwesomeIcon icon={faBell} />
              </div>
              <button 
              className={`logoutButton ${currentUser.isAdmin ? "greenAdmin" : "blueStudent"}`}
              >
               Logout
             </button>
            </div>
        </header>
    )
}