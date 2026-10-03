// src/components/MapEmbed.jsx
import React from 'react';

const Location = () => {
  return (
    <div className="w-full md/2">
      <div className="relative " style={{ paddingBottom: '56.25%' }}>
      <iframe 
        className='rounded-xl'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.822534499858!2d85.044248010886!3d25.610812677352875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5725040b1309%3A0x221f56d203c55093!2sCare%202%20Cure%20physiotherapy%20and%20rehab%20Center!5e0!3m2!1sen!2sin!4v1750329123256!5m2!1sen!2sin" 
        width="600"
        height="450"
        style={{
          border: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
       
      </div>
    </div>
  );
};

export default Location;
