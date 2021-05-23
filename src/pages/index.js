import React from 'react';
import {Link} from "react-router-dom";
import Navigation from "../components/navigation";
import Avatar from '../img/me.jpg'
import SocialIconBox from "../components/socialIcons";
function Home() {
    return (
        <div>
            <Navigation/>
            <header className="hero">
                <div className="hero-box">
                    <img src={Avatar} alt='hero' className="hero-box--img"/>
                        <div className="hero-box-textBox">
                            <p className="hero-sub-H">Hello!!! My name is okechukwu Omeh and I'm a </p>
                            <h1 className="hero-H">Web & Mobile Dev</h1>
                            <div className="mgT4 btn-box">
                                <Link to='/contact' className="btn btn-link">Hire ME</Link>
                                <Link to='/projects' className="btn-bordered btn-bordered-blue mg-l2">View Projects</Link>
                            </div>
                        </div>
                </div>
            </header>
            <SocialIconBox/>

        </div>
    )
}

export default Home;