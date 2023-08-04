import react, { useState } from 'react';

const BoxForm = (props) => {
    const [boxColor, setBoxColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // make a function that logs the color
        props.setShowBox([...props.showBox, <div style={{backgroundColor:`${boxColor}`, width:"100px", height:"100px"}}></div>]) // output [[...props.showbox]
    };
    return (
        <form onSubmit = {handleSubmit }>
            <p>Enter color to make a box with that color</p>
            <input type="text" name="boxColorInput" onChange= {(e) => setBoxColor(e.target.value)} value={boxColor} />
        <input type="submit" value="Add Color"></input>
        </form>
    );


};

export default BoxForm;