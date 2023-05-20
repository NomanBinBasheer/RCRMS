import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


export default function LogoutHeader(){
    return(
        <section className="correctionRequestContainer">
            <h3>New <span className="correctionSpan">Name Change Request</span></h3>
            <section className="correctionFormContainer">
             <form action="" className="correctionSpanFlex">
                    <span className="formSpan">Current Data</span>
                    <input type="text" placeholder=""/>
             </form>
             <form action="" className="correctionSpanFlex">
                    <span className="formSpan">Requested Data</span>
                    <input type="text"  placeholder=""/>
             </form>
             <button>Upload Challan & Documents </button>
              
           </section>
           <div className="noteAndSubmit">
            <p><span> Note:</span> Please upload image of your fee challan and other official documents that will help us verify your provided data like DMC, Birth certificate, FSC or Matric marks sheets etc.</p>
            <button>Submit Request</button>
           </div>
        </section>
    )
}