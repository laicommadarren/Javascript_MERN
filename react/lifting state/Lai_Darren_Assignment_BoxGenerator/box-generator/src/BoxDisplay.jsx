import react, { useState } from 'react';

const BoxDisplay = (props) => { 
    return (
        <>
        {props.showBox.map((item) => {item} /*{return item}*/ )}
        </>
        // this is returning an array with divs (boxes)
    );
};

export default BoxDisplay;