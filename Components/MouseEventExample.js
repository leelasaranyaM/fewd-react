import React, { useState } from 'react';
function MouseEventsExample() {
  const [message, setMessage] = useState('Hover over the box below');
  const handleMouseEnter = () => {
    setMessage('Mouse is on the text!');
  };
  const handleMouseLeave = () => {
    setMessage('Mouse left the text.');
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h3>{message}</h3>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{width: '100px',height: '30px',margin: '20px auto',backgroundColor: 'white',display: 'flex',alignItems: 'center',justifyContent: 'center',
        }}
      >
        Hover Here
      </div>
    </div>
  );
}
export default MouseEventsExample;
