import React, { useContext } from 'react';
import LogoutHeader from '../components/LogoutHeader'
import StudentDetailsContainer from '../components/StudentDetailsContainer'
import UserDetailsBar from "../components/UserDetailsBar"
import CorrectionRequestPopup from "../components/CorrectionRequestPopup"
import { CurrentUserContext } from '../App';

export default function StudentDashboardPage({ switchToLogin }){
  const currentUser = useContext(CurrentUserContext)
    return(
        <>
          <LogoutHeader 
            currentUser= {currentUser}
          />
          <UserDetailsBar 
            currentUser={currentUser}
          />
          <h2 className="changeResquest">Change Requests</h2>
          <StudentDetailsContainer />

          <section className="changeRequestButtonsContainer">
            <h3>Add A New Change Request</h3>
            <div>
            <button className="changeRequestButtons">Name Change Request</button>
            <button className="changeRequestButtons">Father Name Change Request</button>
            <button className="changeRequestButtons">D.O.B Change Request</button>
            </div>
          </section>
          <CorrectionRequestPopup />
        </>
    )
}