import React from "react"
import { usersDB } from '../db.js'

export default function UserDetailsBar(){
      
    return(
        <>
        <section className={`userDetailsBar`}>
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