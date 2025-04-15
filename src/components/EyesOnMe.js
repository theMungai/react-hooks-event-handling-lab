// Code EyesOnMe Component Here
import React from 'react'

function handleFocus(){
    console.log("Good!");
    
}

function handleBlur(){
    console.log('Hey! Eyes on me!');
    
}

function EyesOnMe () {
  return (
    <div>
      <button onBlur={handleBlur} onFocus={handleFocus}>
        Eyes on me
      </button>
    </div>
  )
}

export default EyesOnMe
