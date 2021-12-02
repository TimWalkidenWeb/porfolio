import React from "react";
import anytask from "../../img/anytask.png"
import edgehiill from "../../img/edgehill.png"
import etnnetwork from  "../../img/etnnetwork.png"
import skillpill from "../../img/skillpill.png"

function Experience() {
    return (
        <div id="experience" className="text-center mb-0 mb-md-5">
            <h1 className="text-light">Experience</h1>
            <div className="experience-area experience mt-5">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={edgehiill}
                                         alt="edgehill"/>
                                    <div className="text-light pt-2">
                                        <p>Classroom assistant for first and second-year students.</p>
                                        <hr className="mx-auto red-line"/>
                                        <p className="font-weight-light font-weight-italic">HTML, PHP, Laravel, Javascript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={skillpill}
                                         alt="skillpill"/>
                                    <div className="text-light pt-2">
                                        <p>Skill Pill is a fresh, modern approach to workplace learning.</p>
                                        <hr className="mx-auto red-line"/>
                                        <p className="font-weight-light font-weight-italic">PHP, Laravel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={etnnetwork}
                                         alt="etn network"/>
                                    <div className="text-light pt-2">
                                        <p>A cryptocurrency with huge, genuine usage via our real-world ecosystem.</p>
                                        <hr className="mx-auto red-line"/>
                                        <p className="font-weight-light font-weight-italic">Symfony, MySQL, Unit Testing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={anytask}
                                         alt="anytask"/>
                                    <div className="text-light pt-2">
                                        <p>A freelance website where sellers get paid in ETN.</p>
                                        <hr className="mx-auto red-line"/>
                                        <p className="font-weight-light font-weight-italic">Symfony, Vue, Unit/Functional testing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;