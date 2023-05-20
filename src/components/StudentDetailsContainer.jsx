import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


export default function StudentDetailsContainer(){
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
             </ul>
           </div>
           <ul>
                <li>57043-F19</li>
                <li>D.O.B</li>
                <li id="biggerflex">Adnan Gul</li>
                <li id="biggerflex">Gulistan</li>
                <li id="biggerflex">26 Aug 1998</li>
                <li id="biggerflex">29th Dec, 1998</li>
                <li>3 Docs <div className="downloadButton"><FontAwesomeIcon icon={faCircleArrowDown} /> </div></li>
                <li id="biggerflex"> <div className="remarks"> InComplete Docs</div> <div className="verticalDots"> <FontAwesomeIcon icon={faEllipsisVertical} /> </div>  </li>
                
             </ul>
        </section>
    )
}