
import React, { useState } from 'react';
function TextChanger() {
  const messages = ['Hello, world!','Text updated after button click!','You clicked again!'];
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{messages[index]}</h1>
      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          backgroundColor: 'chocolate',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Change Text
      </button>
    </div>
  );
}
export default TextChanger;
