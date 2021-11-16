import React from 'react';
import Modal from "./Modal";
const ImgItem = ({img}) => {
    const [modal,setModal] = React.useState(false)
    return (
        <div className='project-carousel_container'>


                {
                    modal?
                        <Modal closeModal={setModal} >
                        <img alt={img} className='project-carousel-img-absolute zoom' src={img}/>
                        </Modal>: <img alt={img} className='project-carousel-img' src={img}/>
                }
            <div onClick={()=>setModal(true)} className='project-overlay'> click me   </div>
            </div>



    );
};

export default ImgItem;