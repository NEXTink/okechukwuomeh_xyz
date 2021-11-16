import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from "../components/navigation";
import SocialIconBox from "../components/socialIcons";
import deep1 from '../img/deepsea1.png';
import deep3 from '../img/deepsea3.png';
import deep4 from '../img/deepsea4.png';
import deep5 from '../img/deepsea5.png';
import login from  '../img/login.png';
import reg from  '../img/Register.png';
import astriaHome from  '../img/astrialawTest_home.png';
import goldo from  '../img/goldo.png';
import goldo_tr from  '../img/gold.png';
import oldAstria from  '../img/oldAstria.png';
import oldREg from  '../img/oldReg.png';
import ProjectItem from "../components/projectItem";

function Projects() {
    return (
        <div className='container'>
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


                    <ProjectItem title='deep Sea' stackList={[' Html & SASS(css)' , ' Javascript']} imgList={[deep1,deep3,deep4,deep3,deep5]}/>
                    <ProjectItem title='Goldo Trade'  stackList={[' Html & SASS(css)' , ' Javascript']} bodyText={<p className='paragraph'>    My first attempt at designing a <em className='gold-em'>Gold Trading</em> PLatform</p>} imgList={[goldo,goldo_tr]}/>

                    <div className="project ">
                        <h2 className="h4">Astrianovity</h2>

                        <div className="project-view mg-v2">
                            <div className="project_img-box">
                                <img alt='' className='project_img-box-img' src={oldAstria}/>
                            </div>
                            <div className="project_img-box">
                                <img alt='' className='project_img-box-img' src={oldREg}/>
                            </div>
                            <p className="paragraph">
                                I redesigned it from looking like this to looking like this
                            </p>
                            <div className="project_img-box">
                                <img alt='' className='project_img-box-img' src={login}/>
                            </div>
                            <div className="project_img-box">

                                <img alt='' className='project_img-box-img' src={reg}/>
                            </div>
                            <div className="project_img-box">

                                <img alt='' className='project_img-box-img' src={astriaHome}/>
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
                        <h2 className="h4">Goldo Trade</h2>
                        <div className="project-view mg-v2">

                            <div className="project_img-box">
                                <img alt='' className='project_img-box-img' src={goldo}/>
                            </div>
                            <div className="project_img-box">
                                <img alt='' className='project_img-box-img' src={goldo_tr}/>
                            </div>

                            <div className="project-view-text">
                                <p className="paragraph">

                                </p>
                                <h4 className="h4 mgT4">Project Stack</h4>
                               <div className="grey-box">
                                   <ul className="list">
                                       <li>Html</li>
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
                                    <li><Link to='' target='_blank' className='h5'>peexo</Link></li>
                                    <li><Link to='' target='_blank' className='h5'></Link></li>

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