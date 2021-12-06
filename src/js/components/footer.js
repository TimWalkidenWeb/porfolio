import React from "react";
import {faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    let d = new Date();
    return (
        <div id="footer" className="d-flex align-items-center justify-content-center text-center">
            <div className="py-5 px-4 content mx-auto" >
                <h2 className="font-weight-bold text-light">Get in touch today!</h2>
                <p className="font-weight-light grey font-weight-italic mt-4 mb-4">
                    <a href="mailto://walkidentimothy@gmail.com" rel="nofollow">walkidentimothy@gmail.com</a>
                </p>
                <div className="d-flex flex-row mx-auto justify-content-around">
                    <a href="https://twitter.com/TWalkiden" className="grey">
                        <FontAwesomeIcon className="icon-ft mb-3" icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com/in/timothy-walkiden/" className="grey">
                        <FontAwesomeIcon className="icon-ft mb-3" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/TimWalkidenWeb" className="grey">
                        <FontAwesomeIcon className="icon-ft mb-3" icon={faGithub} />
                    </a>
                </div>
                <p className="grey font-weight-italic mt-4">
                    Copyright &copy; Timothy Walkiden {d.getFullYear()}
                </p>
                <p className="red font-weight-light grey font-weight-italic">
                    Created using React.js
                </p>
            </div>
        </div>
    )
}

export default Footer;
