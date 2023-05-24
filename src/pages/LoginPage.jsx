import React from "react"
import { useState } from "react";
import { usersDB } from '../db.js'

export default function LoginPage({ switchToDashboard }){

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

     const handleChange = (event) =>{
        const eventValue = event.target.value
        if(event.target.name === 'emailInput'){
            setEmailInput(eventValue)
        }
        else if(event.target.name === 'passwordInput'){
            setPasswordInput(eventValue)
        }
        // console.log(eventValue)
     }
    //  console.log(usersDB)
  

    const handleSubmit = (event) => {
        event.preventDefault() 
        const user = usersDB.find((user) => user.email === emailInput && user.password === passwordInput);
        if (user) {
          switchToDashboard(user);
        }

      };
      
    return(
        <main className="loginMain">
            <div className="loginContainer">
           <h2>Hazara University</h2>
           <h1>Record Change Request Management System</h1>
           <span className="rsrmsSpan">(RCRMS)</span>

           <form 
                className="loginFormContainer"
                onSubmit={handleSubmit}
           >
            <span className="formSpan">Email</span>
              <input 
              type="email" 
              placeholder="Enter Your Email"
              name="emailInput"
              onChange={handleChange}
              />
              <span className="formSpan">Password</span>
              <input 
              type="password"  
              placeholder="Enter Your Password"
              name="passwordInput"
              onChange={handleChange}
              />
              <button 
              className="loginButton" 
              >
                Login
              </button>
           </form>
          </div>
        </main>
    )
}