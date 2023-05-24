import React, { useState, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import StudentThreeDotsPopup from "./StudentThreeDotsPopup";
import AdminThreeDotsPopup from "./AdminThreeDotsPopup";
import GiveRemarksPopup from "./GiveRemarksPopup"
import {requests} from "../db.js";
import { CurrentUserContext } from '../App';


export default function StudentDetailsContainer(){

  const {currentUser} = useContext(CurrentUserContext)

// const [threeDotsPopup, setThreeDotsPopup] = useState(false)

const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

const [remarksPopup, setRemarksPopup] = useState(false) 

// const [currentRemarks, setCurrentRemarks] = useState('')

// const newRemarks =


const toggleThreeDotsPopup = (index) =>{
  // setThreeDotsPopup(prevState => !prevState)
  setSelectedButtonIndex((prevIndex) => (prevIndex === index ? null : index));

}


const handleRemarksClose = () => {
  setRemarksPopup(!remarksPopup)
}

const handleRemarksPopup = () => {
  setRemarksPopup(!remarksPopup)
}

// const handleResubmit = () => {
//   requests.forEach(i => {
    
//   })
// }

// console.log(requests[0]._id)

    
    return(
        <section className={`studentDetailsContainer ${currentUser.isAdmin && "marginTop"}`}>
           <div className="detailsTitles">
             <ul className="studentDetailsList">
                <li>Roll No.</li>
                <li>Request Type</li>
                <li id="biggerflex">Name</li>
                <li id="biggerflex">Father Name</li>
                <li id="biggerflex">Current Data</li>
                <li id="biggerflex">Corrected Data</li>
                <li>Documents</li>
                <li id="biggerflex">Remarks</li>
                
             </ul>
           </div>
           {requests.map((request, index)=> (
            <>
           <ul className="studentDetailsList">
                <li>57043-F19</li>
                <li>{request.requestType}</li>
                <li id="biggerflex">{request.fromUser.name}</li>
                <li id="biggerflex">{request.fromUser.fatherName}</li>
                <li id="biggerflex">{request.currentData}</li>
                <li id="biggerflex">{request.correctedData}</li>
                <li>{request.documents.length} Docs <div className="downloadButton"><FontAwesomeIcon icon={faCircleArrowDown} /> </div></li>
                <li id="biggerflex"> 
                <div 
                className={`remarks ${request.remarks === "Rejected" ? "redRemarks" 
                                     : request.remarks === "Missing Challan" ? "purpleRemarks"
                                     : request.remarks === "Re-upload Docs" ? "yellowRemarks"
                                     : request.remarks === "Visit Office" ? "blueRemarks"
                                     : request.remarks === "Incomplete Docs" ? "orangeRemarks"
                                     : request.remarks === "Accepted" ? "greenRemarks"
                                     :  "none"
                                    }`}
                name={request.remarks}
                > 
                    {request.remarks !== 'none' && request.remarks}
                    </div>
                    {
                    (request.remarks !== "Accepted" && request.remarks !== "Rejected") && 
                    <div 
                    className="verticalDots"
                    onClick={() => toggleThreeDotsPopup(index)}
                    > 
                    {
                    selectedButtonIndex === index && 
                    (currentUser.isAdmin ? 
                    <AdminThreeDotsPopup 
                    handleRemarksPopup={handleRemarksPopup}
                    /> 
                    : <StudentThreeDotsPopup 
                    handleResubmit={() => handleResubmit(index)}
                    />)
                     }
                    <FontAwesomeIcon icon={faEllipsisVertical} /> 
                    </div> 
                   }
                </li>
             </ul>
             
               </>
             ))}
             {
             (currentUser.isAdmin && remarksPopup) && 
             <GiveRemarksPopup 
             handleRemarksClose={handleRemarksClose}
             
             />}
        </section>
    )
}