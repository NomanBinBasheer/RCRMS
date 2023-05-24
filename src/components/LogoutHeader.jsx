import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { CurrentUserContext } from '../App';
// import NotificationsPopup from "./NotificationsPopup";


export default function LogoutHeader(){
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    const handleLogout= () => {
        setCurrentUser(null)
    }

//    console.log(currentUser)
    return(
        <header className="logoutHeader">
            <h2>Record Change Request Management System (RCRMS)</h2>
            <div className="logoutContainer">
              <div className={`bellIcon ${currentUser.isAdmin ? "greenBellIcon" : "blueBellIcon"}`}>
                    <FontAwesomeIcon icon={faBell} />
              </div>
              <button 
              className={`logoutButton ${currentUser.isAdmin ? "greenAdmin" : "blueStudent"}`}
              onClick={handleLogout}
              >
               Logout
             </button>
            </div>
            {/* <NotificationsPopup /> */}
        </header>
    )
}