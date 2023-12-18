import React from 'react';
import './Github.css'
const Github = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://discord.gg/UFEHrSbEnU';
  };

  return (
    <div className='Github'>
      <button onClick={redirectToExternalWebsite}>GitHub</button>
    </div>
  );
};
export default Github;
