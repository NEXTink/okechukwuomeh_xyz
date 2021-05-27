import React from 'react';

export default function  useProjectModel() {
   const [projects,setProjects] = React.useState([
       {
           img: require('../img/astrialawTest_home.png'),
           title:'hello'
       },
       {
           img: require('../img/deepsea1.png'),
           title:'hello'
       }
   ])
    return {
        projects,
        setProjects
    }
}

