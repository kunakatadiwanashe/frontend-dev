import React from 'react';




export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme} className="togglebtn" id='togglebtn'>
      { theme === 'light' ? <h6>Switch To Dark Mode</h6>
      : 
      <h6 id='drk'>Switch To Light Mode</h6> }
   
    </div>
  )
}