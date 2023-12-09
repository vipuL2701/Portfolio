import React from 'react';
import './Resume.css'
const Resume = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://drive.google.com/file/d/1zt32qEmBHo7R4-mBr0vkz1qQQbjIaFIK/view?usp=sharing';
  };

  return (
    <div className='Resume'>
      <button onClick={redirectToExternalWebsite}>Resume</button>
    </div>
  );
};
export default Resume;
