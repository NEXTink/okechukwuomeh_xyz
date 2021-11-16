import React from 'react';
import {AiFillCloseCircle} from "react-icons/all";
import {useOutsideAlerter} from "../helpers/closepopups";

const Modal = (props) => {
    const toggleRef = React.useRef(null);
    useOutsideAlerter(toggleRef,props.closeModal);
    return (
        <div className={`modal ${props.className}`} ref={toggleRef}>
            <div className="modal_top">
                <div onClick={()=>props.closeModal(false)} className="modal_top-close">
                    <AiFillCloseCircle/>
                </div>
            </div>
           <div className="modal_body">
               {props.children}
           </div>
        </div>
    );
};

export default Modal;