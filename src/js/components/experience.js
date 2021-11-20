import React from "react";
import anytask from "../../img/anytask.png"
import edgehiill from "../../img/edgehill.png"
import etnnetwork from  "../../img/etnnetwork.png"
import skillpill from "../../img/skillpill.png"

function Experience() {
    return (
        <div id="experience" className="text-center mb-0 mb-md-5 font-weight-bold">
            <h1 className="text-light">Experience</h1>

            <div className="experience-area experience mt-5">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={edgehiill}
                                         alt="trainer-img"/>
                                    <p className="text-light">
                                        Class room assistant, helping to teach first/second year student learn HTML, CSS, Javascript and PHP.
                                    </p>
                                </div>
                                <div className="exp-info">
                                    <h3 className="red">Edge Hill University</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={skillpill}
                                         alt="trainer-img"/>
                                    <p className="text-light">
                                        Skill Pill is a fresh, modern approach to workplace learning. Frontend and backend development in Laravel
                                    </p>
                                </div>
                                <div className="exp-info">
                                    <h3 className="red">SkillPill</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={etnnetwork}
                                         alt="trainer-img"/>
                                    <p className="text-light">
                                        A cryptocurrency with huge, genuine usage via our real-world ecosystem. Backend development in Symfony.
                                    </p>
                                </div>
                                <div className="exp-info">
                                    <h3 className="red">ETN Network</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
                            <div className="experience">
                                <div className="exp-img">
                                    <img className="img-fluid" src={anytask}
                                         alt="trainer-img"/>
                                    <p className="text-light">
                                        Freelance website where sellers get paid in ETN. Frontend and backend development in Symfony and Vue.
                                    </p>
                                </div>
                                <div className="exp-info">
                                    <h3 className="red">AnyTask Platform</h3>
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