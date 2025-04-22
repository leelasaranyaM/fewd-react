import React, { useState } from 'react';
import sampleImage from './image.png'; // Adjust the path as needed

function FocusBlurInput() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <p
        onClick={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
        style={{
          fontSize: '20px',
          color: isFocused ? 'blue' : 'black',
          cursor: 'pointer',
        }}
      >
        Click me to focus and change color!
      </p>

      <img
        src={sampleImage}
        alt="Sample"
        style={{
          marginTop: '20px',
          width: '300px',
          height: 'auto',
          filter: 'none',
          transition: 'filter 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.filter = 'blur(5px)'}
        onMouseLeave={(e) => e.target.style.filter = 'none'}
      />
    </div>
  );
}

export default FocusBlurInput;
