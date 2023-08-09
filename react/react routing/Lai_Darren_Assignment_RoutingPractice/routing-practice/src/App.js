import React from "react";
import {
  Routes,
  Route,
  Link,
  useParams 
} from "react-router-dom";

const Index = (props) => {
  return (
    <div>
      <Link to={"/home"}>Home</Link>
    </div>
  )
}

const Home = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
const Input = (props) => {
  const { input } = useParams();
  const { color1 } = useParams();
  const { color2 } = useParams();
  if (isNaN(+input)) {
    return (
      <div>
        <p style={{color:color1, backgroundColor:color2}}>The word is {input} </p>
      </div>
    )}
  else return (
    <div>
      <p>The number is {input} </p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<Input />} />
        <Route path="/:input/:color1/:color2" element={<Input/>}/>
      </Routes>
    </div>
  );
}

export default App
