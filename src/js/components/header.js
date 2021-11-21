import React from "react";
import background from "../../img/background.svg"

function Header() {
    return (
      <div id="header" className="d-flex align-items-center justify-content-center"
           style={{
               backgroundImage: "url(" + background + ")",
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'
           }}
      >
          <div className="py-5 px-4 content mx-auto" >
              <span className="mb-1 d-flex red">Hi, my name is</span>
              <h1 className="font-weight-bold text-light">Tim Walkiden, full stack developer</h1>
              <p className="font-weight-light grey">
                  I build both backend and frontend web application. I have experience building large projects from learning tools to cryptocurrency. I love learning new skills and helping others to expand their knowledge.
              </p>
          </div>
      </div>
    )
}

export default Header;