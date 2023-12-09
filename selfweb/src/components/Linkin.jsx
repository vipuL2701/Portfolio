import React from 'react';
import './Linkin.css'

const Linkin = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://www.linkedin.com/in/vipul-nigam-350b83102/';
  };

  return (
    <div className='Linkin'>
      <button onClick={redirectToExternalWebsite}>Linkedin</button>
    </div>
  );
};
export default Linkin;