import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
function SocialIconBox () {
    return (
<>
            <div className="icons-social">
                <i className="vertical-line">&nbsp;</i>
                <div className="icons-social-links">
                    <i className="">

                        <Unicons.UilTwitter size='3rem' className='stack-icon-sm twitter'/>
                    </i>
                    <i>
                        <Unicons.UilLinkedin size='3rem' className='stack-icon-sm linkedIn'/>
                    </i>
                    <i>
                        <Unicons.UilGithub size='3rem' className='stack-icon-sm git'/>
                    </i>
                </div>
            </div>
    <div className="overlay-contact">
        <p>okechukwuomeh3@gmail.com</p>
        <div className="horizontal-line">

        </div>
        <div className="mode">
            <i className="las la-sun"></i>
        </div>
    </div>
</>
    )
}

export default SocialIconBox