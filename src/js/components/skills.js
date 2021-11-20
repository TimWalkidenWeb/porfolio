import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCogs, faPaintBrush } from '@fortawesome/free-solid-svg-icons'


function Skills() {
    return (
        <div id="skills" className="text-center mb-0 mb-md-5 font-weight-bold">
            <div className="py-5 px-4 content mx-auto">
                <h1 className="text-light mb-5">Skills</h1>
                <p className="font-weight-light grey">
                    I am a full stack developer with over 3 years experience. My joureny started during my time a
                    university
                    where I found a interest in learning how website work and how they are developed. Since then I have
                    particularly enjoyed building clean, user friendly websites, api's and look forward to learning new
                    skill and find out the next big thing.
                </p>
                <p className="font-weight-light grey">
                    During my free time, I keep my self busy by watching the latest TV and films with friends. I also
                    enjoy
                    supporting my local church, football and travelling which helps me learn about different cultures.
                </p>

                <div className="d-flex flex-column flex-md-row justify-content-between mt-5">
                    <div
                        className="border-light border rounded d-flex flex-column justify-content-start py-5 px-3 mb-5 mb-md-0 skill">
                        <FontAwesomeIcon className="icon mb-3" icon={faPaintBrush} />
                        <h4 className="text-light font-weight-bold">Backend skills</h4>
                        <p className="font-weight-light grey">
                            A good understanding of data structure and developing api's. Ability to explain code with
                            all types of people.
                        </p>
                        <hr className="mx-auto red-line"/>
                        <h5 className="text-light font-weight-bold mt-2 mb-3">Skills</h5>
                        <ul className="font-weight-light grey">
                            <li>PHP</li>
                            <li>MYSQL</li>
                            <li>Symfony</li>
                            <li>Laravel</li>
                        </ul>
                    </div>
                    <div
                        className="rounded border-2 border-light border d-flex flex-column justify-content-start py-5 px-3 mx-0 mx-md-5 mb-5 mb-md-0 skill">
                        <FontAwesomeIcon className="icon mb-3" icon={faCode} />
                        <h4 className="text-light font-weight-bold">Frontend skills</h4>
                        <p className="font-weight-light grey">
                            A good understanding of creating user friendly websites. Ability to bring a design to life.
                        </p>
                        <hr className="mx-auto red-line"/>
                        <h5 className="text-light font-weight-bold mt-2 mb-3">Skills</h5>
                        <ul className="font-weight-light grey">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Vue</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div
                        className="border-2 rounded border-light border d-flex flex-column justify-content-start py-5 px-3 mb-5 mb-md-0 skill">
                        <FontAwesomeIcon className="icon mb-3" icon={faCogs} />
                        <h4 className="text-light font-weight-bold">Other skills</h4>
                        <p className="font-weight-light grey">
                            Ability to work in a agile environment and create test to make sure errors can be caught
                            before code goes live. Plus self management ability.
                        </p>
                        <hr className="mx-auto red-line"/>
                        <h5 className="text-light font-weight-bold mt-2 mb-3">Tools/Skills</h5>
                        <ul className="font-weight-light grey">
                            <li>Jira</li>
                            <li>Slack</li>
                            <li>Agile development</li>
                            <li>Unit/Functional testing</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;