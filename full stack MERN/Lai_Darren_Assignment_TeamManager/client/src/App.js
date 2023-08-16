import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import List from './views/List';
import Status from './views/Status';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <h3><Link to="/players/list">Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link></h3>
      <Routes>
        <Route path="/" element={<Navigate to="/players/list" />} />
        <Route path="/players/list" element={<List />} />
        <Route path="/players/addplayer" element={<Create />} />
        <Route path="/status/game/:id" element={<Status />} />
      </Routes>

    </div>
  );
}
export default App;


