import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/players/list" element={<Main />} />
        <Route path="/players/addplayer" element={<Create />} />
        <Route path="/status/game/:id" element={<Status />} />
      </Routes>

    </div>
  );
}
export default App;


