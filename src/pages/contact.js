import React from 'react';
import Navigation from "../components/navigation";
import SocialIconBox from "../components/socialIcons";
import * as Unicons from '@iconscout/react-unicons';

function Contact() {
    return (
        <div>
            <Navigation/>
            <section className="contact">
                <h2 className="sm-h">Hello!!</h2>
                <p className="md-p mg-v1 bld"> Hire Me | Have a Project in Mind? . </p>


                <div className="contact-area">
                    <i>
                        <Unicons.UilEnvelope className='stack-icon-sm mgR-1' fill='#f7f7f7'/>
                    </i>
                    <span>| okechukwuomeh3@gmail.com</span>
                </div>
                <div className="contact-area">
                    <i>
                        <Unicons.UilPhone className='stack-icon-sm mgR-1' fill='#f7f7f7'/>
                    </i>
                    <span>| +234 811 545 1546</span>
                </div>
            </section>
          <SocialIconBox/>


        </div>
    )
}

export default Contact;