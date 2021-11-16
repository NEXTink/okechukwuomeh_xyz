import React from 'react';
import Navigation from "../components/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSass,faJs, faReact, faNodeJs,faVuejs} from '@fortawesome/free-brands-svg-icons'
import SocialIconBox from "../components/socialIcons";
// import * as Unicons from "@iconscout/react-unicons";

function Journey() {
    return (
        <div className='dampen'>
            <Navigation/>
            <section className="cv-section">
                <div className="my-stack">
                    <h2 className="md-p">
                        MY Stack
                    </h2>
                    <p className="h5">Below are my major Stack</p>
                    <div className="my-stack-carousel">
                        <div className="stack-item">
                            <div className="animatedCircle nodejs">
                                <FontAwesomeIcon  className='stack-icon  ' icon={faNodeJs} />
                            </div>

                            <h2 className='h6'> NodeJs</h2>
                        </div>
                        <div className="stack-item">
                             <div className="animatedCircle sass">
                                 <FontAwesomeIcon color='#f7f7f7' className='stack-icon' icon={faSass} />
                            </div>

                            <h2 className='h6'>SASS  </h2>
                        </div>
                        <div className="stack-item">
                             <div className="animatedCircle js">
                                 <FontAwesomeIcon className='stack-icon' icon={faJs} />
                            </div>

                            <h2 className='h6'> Javascript</h2>
                        </div>
                        <div className="stack-item">
                             <div className="animatedCircle react">
                                 <FontAwesomeIcon className='stack-icon' icon={faReact} />
                            </div>

                            <h2 className='h6'> React JS</h2>
                        </div>
                        <div className="stack-item">
                             <div className="animatedCircle vue">
                                 <FontAwesomeIcon className='stack-icon' icon={faVuejs} />
                            </div>

                            <h2 className='h6'> Vue JS</h2>
                        </div>
                    </div>
                </div>
                <div className="experience mg-v4">
                    <h2 className="md-p">
                        Experience So Far
                    </h2>
                    <p className="paragraph mg-v1">
                        I am an enthusiastic innovator, designer and software developer and I love finding solutions
                        to problems. I have over 4years professional experience in various areas of design and
                        software development.
                    </p>
                </div>
                <div className="timeline mg-v4">
                    <h2 className="md-p">
                        Timeline
                    </h2>
                    <div className="mg-v2">
                        <h3 className="sm-h">Below shows my growth over the last few years</h3>
                        <div className="mg-v1">
                            <h3 className="paragraph bld cv-h">Astrianovity LTD</h3>
                            <p className="  cv-p  ">Lead UI/UX Designer & Front-end Developer | 2020 - Dec 2020</p>
                        </div>
                        <div className="mg-v1">
                            <h3 className="paragraph bld cv-h">Vendar LTD</h3>
                            <p className="  cv-p ">Lead Mobile Developer | 2018 - Present</p>
                        </div>
                        <div className="mg-v1">
                            <h3 className="paragraph bld cv-h">Nigeria Customs Broadcasting Network</h3>
                            <p className="  cv-p ">Intern/ Digital Producer | 2020 - Jan 2021</p>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <h2 className="md-p">
                        Education
                    </h2>
                    <div className="mg-v2">
                        <h3 className="paragraph bld cv-h">University of Nigeria Nsukka</h3>
                        <p className="  cv-p ">Mechanical Engineering</p>
                        <p className="  cv-p ">B.eng</p>
                        <p className="  cv-p ">2017 - present</p>

                    </div>
                </div><div className="education">
                    <h2 className="md-p">
                        Skills
                    </h2>
                    <div className="mg-v2">
                        <p className="paragraph  cv-h">I am a critical thinker and Planner</p>
                        <p className="paragraph  cv-h">I handle pressure well</p>
                        <p className="paragraph  cv-h">Written Communication</p>
                        <p className="paragraph  cv-h">Team Player</p>
                        <p className="paragraph  cv-h">Presentation</p>
                        <p className="paragraph  cv-h">Adaptability</p>


                    </div>
                </div>
                <div className="education">
                    <h2 className="md-p">
                        Software and applications
                    </h2>
                    <div className="mg-v2">
                        <h3 className="paragraph h4">Design</h3>
                        <p className="paragraph cv-h">Adobe XD</p>
                        <p className="paragraph cv-h">Illustrator</p>

                        <p className="paragraph cv-h">Figma</p>
                         <p className="paragraph cv-h">Photoshop</p>
                        <h3 className="paragraph h4">Web Development</h3>
                        <p className="paragraph cv-h">Javascript</p>
                        <p className="paragraph cv-h">Nodejs</p>
                        <p className="paragraph cv-h">Php</p>
                         <p className="paragraph cv-h">React</p>
                         <p className="paragraph cv-h">Vuejs</p>
                         <p className="paragraph cv-h">Sass(css)</p>
                         <p className="paragraph cv-h">MongoDB</p>
                         <p className="paragraph cv-h">SQL</p>
                        <h3 className="paragraph h4">Mobile Development</h3>
                        <p className="paragraph cv-h">Java</p>
                        <p className="paragraph cv-h">Flutter</p>
                        <p className="paragraph cv-h">React Native</p>
                        <h3 className="paragraph h4">Version Control</h3>
                        <p className="paragraph cv-h">Github</p>
                        <p className="paragraph cv-h">Bitbucket</p>




                    </div>
                </div>
            </section>

            <SocialIconBox/>

        </div>
    )
}

export default Journey;