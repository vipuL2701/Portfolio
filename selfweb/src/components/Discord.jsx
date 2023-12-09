import React from 'react';
import './Discord.css'
const Discord = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://discordapp.com/users/1133733986833809428';
  };

  return (
    <div className='discord'>
      <button onClick={redirectToExternalWebsite}>Discord</button>
    </div>
  );
};

export default Discord;
