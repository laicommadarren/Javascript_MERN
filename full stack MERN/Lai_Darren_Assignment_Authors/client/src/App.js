import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import Index from './views/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/authors" element={<Main />} />
        <Route path="/authors/new" element={<Create />} />
        <Route path="/authors/:id/edit" element={<Update />} />
      </Routes>

    </div>
  );
}
export default App;

