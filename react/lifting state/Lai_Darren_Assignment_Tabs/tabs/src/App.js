import React, { useState } from 'react';
import TabInput from './TabInput'; //edit these
import Tabs from './Tabs';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      {<Tabs currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>}
      <TabInput currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>
    </>
  )
}

export default App;

