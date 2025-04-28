import React from 'react';
import '../../index.css';

const Slider = () => {
    const items = Array.from({ length: 10 }, (_, idx) => (
      <div className="item text-lg tracking-widest" key={idx}>
        FEATURED THIS SEASON
      </div>
    ));
  
    return (
      <div>
        <div
          className="slider"
          style={{
            '--width': '250px', // adjust based on your text/logo size
            // '--height': '50px',
            '--quantity': 10,
          }}
        >
          <div className="list">
            {items}
            {items} {/* <-- duplicate the items! */}
          </div>
        </div>
      </div>
    );
  };
  

export default Slider;
