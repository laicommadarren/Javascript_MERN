import React, { useState } from 'react';

const TabInput = (props) => {
    // we want an array with all the tabText
    const [tabTexts, setTabTexts] = useState({0:"",1:"", 2:""});
    // for above, key = index, value = tabText
    // tabTexts is a bunch of key value pairs
    const updateTabTexts = (e) => {
        // not sure if I need to make the initialized part in line 5 an array of objects
        console.log(props.currentIndex);
        setTabTexts(
            (prev) => ({...prev, [props.currentIndex]:e.target.value}
            )
        )};
        // but how do connect it to the right index to update?

    return (
        <>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter text"
                onChange={(e) => updateTabTexts(e)}
                value={tabTexts[props.currentIndex]}
            ></textarea>
        </>
    );
}

export default TabInput;