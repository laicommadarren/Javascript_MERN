import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/players/list" />} />
        <Route path="/players/list" element={<Main />} />
        <Route path="/players/addplayer" element={<Main />} />
        <Route path="/status/game/:id" element={<Main />} />
      </Routes>

    </div>
  );
}
export default App;


