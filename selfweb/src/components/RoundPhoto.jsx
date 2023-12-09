import React from 'react';
import './RoundPhoto.css'; 
import porfile_pic from '../img/profil.jpg';

const RoundPhoto = () => {
  return (
    <div className="round-photo-container">
      <img
        src={porfile_pic}
        alt="Profile"
        className="round-photo"
      />
    </div>
  );
};

export default RoundPhoto;
