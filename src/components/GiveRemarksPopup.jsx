import React from 'react'


export default function GiveRemarksPopup({handleRemarksPopup}){
    return(
        <section className="giveRemarksPopupContainer">
            <div className="closeButtonContainer">
            <button 
            className="closeButton"
            onClick={handleRemarksPopup}
            >
            &#10006;
            </button>
            </div>
         

            <h2>Give remarks to the Student Request</h2>
            <ul>
                <li> Request Type: <span>D.O.B</span></li>
                <li>Current Data: <span>28 Aug, 1997</span></li>
                <li>Corrected Data: <span>03 Dec, 2000</span></li>
            </ul>
            <section className="remarksGridContainer">
                <div>
                    <h3>Missing Challan</h3>
                    <p>Mark the request as pending and notify the student to submit the missing challan form/image.</p>
                </div>
                <div>
                    <h3>Visit Office / Office Summon</h3>
                    <p>Mark the request as pending and notify the student to visit the office to further discuss their request.</p>
                </div>
                <div>
                    <h3>Incomplete Docs</h3>
                    <p>Mark the request as pending and notify the student to re-submit the request including all the files.</p>
                </div>
                <div>
                    <h3>Missing Challan</h3>
                    <p>Mark the request as pending and notify the student to re-submit the request because the current docs are blurry or unreadable.</p>
                </div>
            </section>
        </section>
    )
}