import React from "react"
// import CloseButton from './CloseButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";



export default function CorrectionRequestPopup({ correctionRequestPopup, setCorrectionRequestPopup, changerequestType }) {
    const handleClose = () => {
        setCorrectionRequestPopup(false)
    }
    return (
      <>
        {correctionRequestPopup && (
          <section className="correctionRequestContainer">
            <div className="closeButtonContainer">
            <button 
            className="closeButton"
            onClick={handleClose}
            >
            &#10006;
            </button>
            </div>
            <h3>
              New <span className="correctionSpan">{changerequestType}</span>
            </h3>
            <section className="correctionFormContainer">
              <form action="" className="correctionSpanFlex">
                <span className="formSpan">Current Data</span>
                <input type="text" placeholder="" />
              </form>
              <form action="" className="correctionSpanFlex">
                <span className="formSpan">Requested Data</span>
                <input type="text" placeholder="" />
              </form>
              <button>Upload Challan & Documents</button>
            </section>
            <div className="noteAndSubmit">
              <p>
                <span>Note:</span> Please upload image of your fee challan and other official documents that will help us
                verify your provided data like DMC, Birth certificate, FSC or Matric marks sheets etc.
              </p>
              <button>Submit Request</button>
            </div>
          </section>
        )}
      </>
    );
  }
  