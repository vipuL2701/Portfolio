import React from 'react';
import './Resume.css'
const Resume = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://drive.google.com/file/d/1dqPdFs4lJG26UW-VxdR3CSDf8m0n2zu4/view?usp=sharing';
  };

  return (
    <div className='Resume'>
      <button onClick={redirectToExternalWebsite}>Resume</button>
    </div>
  );
};
export default Resume;
