import React, { useState, createContext } from 'react'
import StudentDashboardPage from './pages/StudentDashboardPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import LoginPage from './pages/LoginPage'
import './App.css'

export const CurrentUserContext = createContext(null)

export default function App() {
  // Set the state to decide what is the current page to be loaded
    const [currentUser, setCurrentUser] = useState(null);

    const switchToDashboard = (user) => {
           setCurrentUser(user);
      
    };

    const switchToLogin = () => {
      setCurrentUser(null);
    };
   
    const renderPage = () =>{
    
    if (currentUser) {
      if (currentUser.isAdmin) {
        return <AdminDashboardPage currentUser={CurrentUserContext} switchToLogin={switchToLogin} />;
      } else if (!currentUser.isAdmin) {
        return <StudentDashboardPage currentUser={currentUser} switchToLogin={switchToLogin} />;
      }
    } else {
      return <LoginPage switchToDashboard={switchToDashboard} />;
    }
  };
    

    return(
      <>
      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
       {renderPage()}
       </CurrentUserContext.Provider>
      </>
    )
}