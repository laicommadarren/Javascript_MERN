import React, { useState } from 'react';
import Tasklist from './Tasklist';
import TasklistDisplay from './TasklistDisplay';

function App() {
  const [showList, setShowList] = useState([]);

  const removeTaskByIndex = (deleteThisIndex) => {
    const currentList = showList.filter((item, index) => index !== deleteThisIndex);
    setShowList(currentList);
  }
return (
  <>
    <Tasklist showList={showList} setShowList={setShowList} />
    <TasklistDisplay showList={showList} setShowList={setShowList} removeTaskByIndex={removeTaskByIndex} />
  </>
)
}

export default App;
