import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


export default function LogoutHeader({ currentUser }){
   console.log(currentUser)
    return(
        <header className="logoutHeader">
            <h2>Record Change Request Management System (RCRMS)</h2>
            <div className="logoutContainer">
              <div className={`bellIcon `}>
                    <FontAwesomeIcon icon={faBell} />
              </div>
              <button 
              className={`logoutButton `}
              >
               Logout
             </button>
            </div>
        </header>
    )
}