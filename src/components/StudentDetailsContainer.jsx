import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import StudentThreeDotsPopup from "./StudentThreeDotsPopup.jsx";
import {requests} from "../db.js";

export default function StudentDetailsContainer(){
const [threeDotsPopup, setThreeDotsPopup] = useState(false)

const toggleThreeDotsPopup = () =>{
  setThreeDotsPopup(prevState => !prevState)
}



  //  const [currentRemarks, setCurrentRemarks] = useState()

    // const styles = {
    //   requests.forEach(request => (
    //     // request.remarks === "Missing Challan" ? setCurrentRemarks(request.remarks)
    //     // : request.remarks === "Re-upload Docs" ? setCurrentRemarks(request.remarks)
    //     // : request.remarks === "Visit Office" ? setCurrentRemarks(request.remarks)
    //     // : setCurrentRemarks('none')
    //   ))
    // }
    
    return(
        <section className="studentDetailsContainer">
           <div className="detailsTitles">
             <ul>
                <li>Roll No.</li>
                <li>Request Type</li>
                <li id="biggerflex">Name</li>
                <li id="biggerflex">Father Name</li>
                <li id="biggerflex">Current Data</li>
                <li id="biggerflex">Corrected Data</li>
                <li>Documents</li>
                <li id="biggerflex">Remarks</li>
                {threeDotsPopup && <StudentThreeDotsPopup />}
             </ul>
           </div>
           {requests.map(request => (
            <>
           <ul>
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
                    onClick={toggleThreeDotsPopup}
                    > 
                    <FontAwesomeIcon icon={faEllipsisVertical} /> 
                    </div> 
                   }
                </li>
             </ul>
             
               </>
             ))}
             
        </section>
    )
}