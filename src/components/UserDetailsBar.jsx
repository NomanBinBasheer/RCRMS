import React, { useContext } from "react"
import { usersDB } from '../db.js'
import { CurrentUserContext } from '../App';


export default function UserDetailsBar(){
  const currentUser = useContext(CurrentUserContext)
      
    return(
        <>
        <section className={`userDetailsBar ${currentUser.isAdmin ? "greenAdmin" : "blueStudent"}`}>
           <ul>
             {
                
             }
                       <li>Father Name: <span className="userNameBold">Adnan Gul </span></li>
                       <li>Student Name: <span className="userNameBold">Gulistan </span></li>
                       <li>Dath Of Birth: <span className="userNameBold">26th Aug, 1998 </span></li>
           </ul>
        </section>
        </>
    )
}