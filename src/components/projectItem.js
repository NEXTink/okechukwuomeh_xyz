import React from 'react';
import ImgItem from "./ImgItem";
const ProjectItem = ({imgList,title,stackList, bodyText}) => {

    return (
        <div className="project  ">
            <h2 className="cv-h">{title}</h2>
            <div className="project-view mg-v2">

                <div className="project-carousel">
                    <div className="disp_flex">
                        {
                           imgList.length>0 ?imgList.map((e,i)=>{
                                return   <ImgItem key={i} img={e}/>
                            }):null
                        }
                    </div>
                </div>
                <div className="project-view-text">
                    {bodyText?bodyText:null}
                         <h4 className="h4 mgT4">Project Stack</h4>
                    <div className="grey-box">
                        <ul className="list">
                            {stackList.length>0?stackList.map((e,i)=> <li key={i}>{e}</li>):null}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="btn-box mg-v2 pd-v2">
                <a href='https://vendar.org' rel='noreferrer' target='_blank' className="btn btn-project ">Live Project</a>
            </div>
        </div>
    );
};




export default ProjectItem;