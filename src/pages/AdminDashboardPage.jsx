import React, {useState} from "react"
import LogoutHeader from '../components/LogoutHeader'
import UserDetailsBar from "../components/UserDetailsBar"
import StudentDetailsContainer from '../components/StudentDetailsContainer'
import GiveRemarksPopup from '../components/GiveRemarksPopup'

export default function AdminDashboardPage({ currentUser, switchToLogin }){
    const [remarksPopup, setRemarksPopup] = useState(false) 

    return(
        <>
        <LogoutHeader />
        <UserDetailsBar />
        {/* <GiveRemarksPopup /> */}
        <StudentDetailsContainer />
        </>
        
    )
}