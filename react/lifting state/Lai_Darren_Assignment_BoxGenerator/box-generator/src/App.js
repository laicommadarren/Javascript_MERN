import React, { useState } from 'react';
import BoxForm from './BoxForm';
import BoxDisplay from './BoxDisplay';

function App() {
  const [showBox, setShowBox] = useState([]);
  return (
    <>
      <BoxForm showBox = {showBox} setShowBox = {setShowBox}/>
      <BoxDisplay showBox ={ showBox } />
    </>
  )
}


export default App;
