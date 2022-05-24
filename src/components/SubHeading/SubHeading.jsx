import React from 'react';
import {FaHeartbeat} from 'react-icons/fa';
const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>
    <p className='p__cormorant' style={{color:"black"}}>{title}</p>
    <FaHeartbeat fontSize={27} color="red"/>
   
  </div>
);

export default SubHeading;
