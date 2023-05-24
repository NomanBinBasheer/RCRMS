import React, { useContext, useState } from 'react';
import LogoutHeader from '../components/LogoutHeader'
import StudentDetailsContainer from '../components/StudentDetailsContainer'
import UserDetailsBar from "../components/UserDetailsBar"
import CorrectionRequestPopup from "../components/CorrectionRequestPopup"


// import { CurrentUserContext } from '../App';

export default function StudentDashboardPage(){

  // const [changeResquest, setChangeResquest] = useState(false)

  // const {currentUser} = useContext(CurrentUserContext)

  const [correctionRequestPopup, setCorrectionRequestPopup] = useState(false)
  const [changerequestType, setChangerequestType] = useState('')

  const handlePopup = (event) => {
    setCorrectionRequestPopup(true)
    setChangerequestType(event.target.name)
  }
  // console.log(correctionRequestPopup)
    return(
        <>
          <LogoutHeader 
          />
          <UserDetailsBar 
          />
          <h2 id="changeResquest">Change Requests</h2>
          <StudentDetailsContainer />

          {!correctionRequestPopup && <section className="changeRequestButtonsContainer">
            <h3>Add A New Change Request</h3>
            <div>
            <button 
            name='Name Change Request'
            className="changeRequestButtons" 
            onClick={handlePopup}>Name Change Request
            </button>
            <button 
            name='Father Name Change Request'
            className="changeRequestButtons" 
            onClick={handlePopup}>Father Name Change Request
            </button>
            <button 
            name='D.O.B Change Request'
            className="D.O.BchangeRequestButtons" 
            onClick={handlePopup}>D.O.B Change Request
            </button>
            </div>
          </section>
          } 
          <CorrectionRequestPopup 
            correctionRequestPopup={correctionRequestPopup}
            changerequestType={changerequestType}
            setCorrectionRequestPopup={setCorrectionRequestPopup}
          />
        </>
    )
}