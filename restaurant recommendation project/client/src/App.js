import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/pirates" />} />
                <Route path="/pirates" element={<List />} />
                <Route path="/pirate/new" element={<Create />} />
                <Route path="/pirate/:id" element={<DisplayOne />} />
            </Routes>

        </div>
    );
}
export default App;