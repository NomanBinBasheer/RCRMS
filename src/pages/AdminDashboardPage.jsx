import React from "react"
import LogoutHeader from '../components/LogoutHeader'
import UserDetailsBar from "../components/UserDetailsBar"
import StudentDetailsContainer from '../components/StudentDetailsContainer'

export default function AdminDashboardPage({ currentUser, switchToLogin }){
    return(
        <>
        <LogoutHeader />
        <UserDetailsBar />
        <StudentDetailsContainer />
        </>
        
    )
}