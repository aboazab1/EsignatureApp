import React, { useState } from 'react';
import Title from './components/Title';

export default function EsignatureApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  // Container styling set to Left-to-Right (LTR)
  const inputContainerStyle = {
    display: 'flex',
    gap: '20px',
    width: '100%',
    maxWidth: '800px',
    margin: '30px auto',
    flexWrap: 'wrap',
    direction: 'ltr' 
  };

  const inputItemStyle = {
    flex: '1 1 300px',
    padding: '14px 20px',
    border: '2px solid #cbd5e1',
    borderRadius: '12px',
    fontSize: '1.1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    textAlign: 'left', // Align text to the left for English
    backgroundColor: 'white'
  };

  return (
    <div className='container' dir="ltr">
      {/* Dynamic Titles */}
      <Title classes={"title mt-medium"} text={name || "Your Name Here"} />
      <Title classes={"subtitle mt-medium"} text={date || "Select Date"} />

      {/* Professional Description in English */}
      <p className='description-text'>
        We offer the ultimate solution for managing and signing your documents digitally with total security and ease. 
        With our e-signature platform, you can bid farewell to the hassle of printing and traditional scanning, 
        transitioning to a smart signing experience that ensures lightning speed and data protection according to the highest industry standards. 
        Whether you are managing commercial contracts or administrative paperwork, we provide the flexibility to sign and send your files in seconds, from anywhere in the world.
      </p>

      {/* Input Fields Group */}
      <div style={inputContainerStyle}>
        {/* Name Input */}
        <input
          type='text'
          placeholder="Enter full name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputItemStyle}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
        />

        <input
  // يبدأ كـ text ليظهر Placeholder إنجليزي واضح ويختفي العربي تماماً
  type={date ? "date" : "text"} 
  placeholder="Select signing date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => {
    if (!e.target.value) e.target.type = "text";
  }}
  className="custom-input"
  lang="en" // إجبار اللغة الإنجليزية
/>
      </div>
    </div>
  );
}