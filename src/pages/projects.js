import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from "../components/navigation";
import SocialIconBox from "../components/socialIcons";
// import deep1 from '../img/deepsea1.png';
// import deep2 from '../img/deepsea2.png';
// import deep3 from '../img/deepsea3.png';
// import deep4 from '../img/deepsea4.png';
// import deep5 from '../img/deepsea5.png';
// import deep6 from '../img/deepsea6.png';
function Projects() {
    return (
        <div>
            <Navigation/>
            <div className="projects-area">
                <h2 className="h3 mg-b4">
                    Projects
                </h2>
                <div className="projects">


                    <div className="project ">
                        <h2 className="cv-h">Vendar Ltd</h2>
                        <div className="project-view mg-v2">
                            <div className="project-view-text">
                                <p className="paragraph">This is an ongoing project that I and my friends are invested in. I worked as a flutter dev.
                                Its been an awesome experience with a new language <em>Dart</em> & framework <em>Flutter</em>. When the project is done or out I will give you an update.
                                </p>
                            </div>
                        </div>
                        <div className="btn-box mg-v2 pd-v2">
                            <a href='https://vendar.org' rel='noreferrer' target='_blank' className="btn btn-project ">Live Project</a>
                        </div>
                    </div>


                    <div className="project ">
                        <h2 className="cv-h">DeepSea</h2>
                        <div className="project-view mg-v2">
                            <div className="project-view-imgs mg-v2">
                                <div className="stack-item-3">
                                   {/*<img className='stack-img' alt="deepsea1" src={deep1}/>*/}
                            </div>
                                <div className="stack-item-2">

                                    {/*<img className='stack-img' alt="deepsea1" src={deep3}/>*/}
                                </div>
                                <div className="stack-item-2">
                                    {/*<img className='stack-img' alt="deepsea1" src={deep4}/>*/}
                                    <img alt='' src={require('../img/astrialawTest_home.png')}/>
                                </div>


                            </div>
                            <div className="project-view-text">
                                <p className="paragraph">I worked on this design and implementation for a friend. A basic dashboard design, not my best work but I enjoyed the process.</p>
                                <h4 className="h4 mgT4">Project Stack</h4>
                               <div className="grey-box">
                                   <ul className="list">
                                       <li>Html & SASS(css)</li>
                                       <li>Javascript</li>
                                   </ul>
                               </div>
                            </div>
                        </div>
                        <div className="btn-box mg-v2 pd-v2">
                            <a href='https://vendar.org' rel='noreferrer' target='_blank' className="btn btn-project ">Live Project</a>
                        </div>
                    </div>

                    <div className="project ">
                        <h2 className="h4">Astrianovity</h2>
                        <div className="project-view mg-v2">
                            <div className="project-view-imgs mg-v2">
                               <div className="project-img">

                               </div>
                                <div className="project-img">

                               </div>

                            </div>
                            <div className="project-view-text">
                                <p className="paragraph">
                                    While being the lead <em>UI/UX Designer &  Front-end engineer</em>  at astrianovity, a Nigerian startup, I worked
                                    on several designs and on improving their  overall user experience. It was a cool & a big first for me, as I managed both the design
                                    and front-end dev. Although I cannot disclose some of my designs and code for these projects, there links are below.
                                </p>
                                <h4 className="h4 mgT4">Projects Under Astrianovity</h4>
                                <div className="grey-box">
                                    <ul className="list">

                                        <li><a href='https://astriaedu.com' rel='noreferrer' target='_blank' >Astriaedu</a></li>
                                        <li><a href='https://astriaai.com' rel='noreferrer' target='_blank' >Astriaai</a></li>
                                        <li><a href='https://astrialaws.com' rel='noreferrer' target='_blank' >Astrialaws</a></li>

                                    </ul>
                                </div>
                                <h4 className="h4 mgT4">Project Stack</h4>
                               <div className="grey-box">
                                   <ul className="list">
                                       <li>React</li>
                                       <li>Javascript</li>
                                       <li>Sass(css)</li>
                                       <li>APIs</li>
                                   </ul>
                               </div>
                            </div>
                        </div>
                        <div className="btn-box mg-v2 pd-v2">
                            <Link to='' className="btn btn-project ">Live Project</Link>
                        </div>
                    </div>
                    <div className="project ">
                        <h2 className="cv-h">Okechukwuomeh.xyz</h2>
                        <div className="project-view mg-v2">
                            <div className="project-view-imgs mg-v2">
                                <div className="stack-item-2">

                                </div>
                                <div className="stack-item">

                                </div>
                                <div className="stack-item">

                                </div>
                                <div className="stack-item">

                                </div>

                            </div>
                            <div className="project-view-text">
                                <p className="paragraph">
                                    Although, not a big project and one that I didn't complete.
                                </p>
                            </div>
                        </div>
                        <div className="btn-box mg-v2 pd-v2">
                            <Link to='' className="btn btn-project ">Live Project</Link>
                        </div>
                    </div>
                    <div className="project ">
                        <h2 className="cv-h">Links To Some of My Side Projects</h2>
                        <div className="project-view mg-v2">
                            <div className="project-view-text">
                                <p className="paragraph">
                                    Although not big projects but they show my growth over the years.
                                </p>
                            </div>
                            <div className="grey-box">
                                <ul className="list">
                                    <li> <a href='https://github.com/NEXTink/motioncss' rel='noreferrer' target='_blank' >Motioncss</a></li>
                                    {/*<li><Link to='' target='_blank' className='h5'>peexo</Link></li>*/}
                                    {/*<li><Link to='' target='_blank' className='h5'></Link></li>*/}

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        <SocialIconBox/>
        </div>
    )
}

export default Projects;