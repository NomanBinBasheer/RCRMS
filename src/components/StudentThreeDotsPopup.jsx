import React from "react";


export default function StudentThreeDotsPopup({handleResubmit}){
    return(
        <div className="studentThreeDotsPopupContainer">
          <ul>
            <li 
            // onClick={handleResubmit}
            >Re-submit Request</li>
            <li>Cancel Request</li>
          </ul>
        </div>
    )
}