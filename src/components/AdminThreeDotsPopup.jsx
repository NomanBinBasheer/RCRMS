import React from "react";


export default function AdminThreeDotsPopup({handleRemarksPopup}){
    return(
        <div className="studentThreeDotsPopupContainer">
          <ul>
            <li>Accept Request</li>
            <li>Reject Request</li>
            <li 
            onClick={handleRemarksPopup}
            >Give Remarks</li>
          </ul>
        </div>
    )
}