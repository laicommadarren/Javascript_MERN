import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";

const Index = (props) => {
}

function App() {
    
    return (
        <div>
            <Form />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/people/:id" element={<People />} />
                <Route path="/planets/:id" element={<Planets />} />
            </Routes>
        </div>
    );
}

export default App;
