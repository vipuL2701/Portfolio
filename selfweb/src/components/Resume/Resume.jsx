import React from 'react';
import './Resume.css'
const Resume = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://drive.google.com/file/d/1ouQZ4fRYUK3OC86oRwv7hM3Ho4EW-bJO/view?usp=sharing';
  };

  return (
    <div className='Resume'>
      <button onClick={redirectToExternalWebsite}>Resume</button>
    </div>
  );
};
export default Resume;
