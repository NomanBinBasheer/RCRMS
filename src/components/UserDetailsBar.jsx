import React, { useContext } from "react"
import { usersDB } from '../db.js'
import { CurrentUserContext } from '../App';


export default function UserDetailsBar(){
  const {currentUser} = useContext(CurrentUserContext)
      console.log(currentUser)
    return(
        <>
        <section className={`userDetailsBar ${currentUser.isAdmin ? "greenAdmin" : "blueStudent"}`}>
           <ul>
             {
                currentUser.isAdmin ? (
                      <li>Admin Name: <span className="userNameBold">{currentUser.name}</span></li>
                    ) : (
                      <>
                      <li>Student Name: <span className="userNameBold">{currentUser.name} </span></li>
                       <li>Father Name: <span className="userNameBold">{currentUser.fatherName} </span></li>
                       <li>Dath Of Birth: <span className="userNameBold">{currentUser.dateOfBirth} </span></li>
                       </>
                    )
             }
                       
           </ul>
        </section>
        </>
    )
}