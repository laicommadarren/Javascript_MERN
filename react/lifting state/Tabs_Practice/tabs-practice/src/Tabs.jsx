import react, { useState } from 'react';

const Tabs = (props) => {
    const handleClick1 = () => {
        props.setCurrentIndex(0);
        console.log(props.currentIndex);
    }
    const handleClick2 = () => {
        props.setCurrentIndex(1);
        console.log(props.currentIndex);
    }
    const handleClick3 = () => {
        props.setCurrentIndex(2);
        console.log(props.currentIndex);
    }

    
    const defaultTabs = [
        <div style={{border:'2px solid black', padding:'10px', margin:'5px'}} onClick={handleClick1}>Tab 1</div>,
        <div style={{border:'2px solid black', padding:'10px', margin:'5px'}} onClick={handleClick2}>Tab 2</div>,
        <div style={{border:'2px solid black', padding:'10px', margin:'5px'}} onClick={handleClick3}>Tab 3</div>
        ]
    const currentTabs = [...defaultTabs];
    currentTabs[props.currentIndex] = <div style={{ border: '2px solid black', padding: '10px', margin: '5px', backgroundColor: 'black', color: 'white' }}>Tab {props.currentIndex + 1}</div>;
    return (
        <div style={{ display: 'flex' }}>
            {currentTabs}
        </div>
    )
}

export default Tabs;