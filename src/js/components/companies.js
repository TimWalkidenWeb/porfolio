import React from "react";
import etnNetwork from "../../img/ETN-Network-logo-dark.svg";
import anytaskLogo from "../../img/anytaskLogo.svg"
import edgeHillLogo from "../../img/edge-hill-university-logo-vector.svg"
import skillPill from "../../img/sp_logo.png"

function Companies() {
    return (
        <div id="companies" className="text-center mb-0 mb-md-5 py-5 px-4 mx-auto">
            <h1 className="text-light mb-5">Companies I have worked with</h1>
            <div className="d-flex flex-column flex-md-row justify-content-md-between justify-content-sm-center align-items-center">
                <img src={edgeHillLogo}
                     alt="edgehill" className="company-img text-light mb-3"/>
                <img src={skillPill}
                     alt="skillPill" className="company-img mb-3"/>
                <img src={etnNetwork}
                     alt="etnNetwork" className="company-img mb-5"/>
                <img src={anytaskLogo}
                     alt="anytaskLogo" className="company-img mb-3"/>
            </div>
        </div>
    )
}

export default Companies;