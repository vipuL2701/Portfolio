import React from 'react';
import './Github.css'
const Github = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://github.com/vipuL2701';
  };

  return (
    <div className='Github'>
      <button onClick={redirectToExternalWebsite}>GitHub</button>
    </div>
  );
};
export default Github;
