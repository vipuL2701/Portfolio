import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
  const redirectToExternalWebsite = () => {
        window.location.href = 'https://forms.gle/EDC4NSVNeoqm8yUh8';
  };

  return (
    <div className='ContactUs'>
      <button onClick={redirectToExternalWebsite}>ContactUs</button>
    </div>
  );
};
export default ContactUs;
