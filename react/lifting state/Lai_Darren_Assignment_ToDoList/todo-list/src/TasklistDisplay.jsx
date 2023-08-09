import react, { useState } from 'react';

const TasklistDisplay = (props) => {
    const updateDone = (e, modIndex) => {
            // props.setIsDone(true);
            const currentList = props.showList.map((el, index) => index == modIndex
            ? {...el, isChecked:e.target.checked} : el)
            props.setShowList(currentList); 
    }
            

    return (
        <>
            {props.showList.map((item, index) => {
                // if (item.isChecked) { // if item.isChecked is true, strikethrough
                return (
                    <div key={index}>
                        <div style={{ display: 'flex' }}>
                            {item.isChecked ? <strike>{item.message}</strike>: item.message}
                            <label>
                                <input
                                    type="checkbox"
                                    checked={props.isDone}
                                    onChange={(e) => updateDone(e, index)}
                                // not sure if I need the arguments passing through
                                />
                            </label>
                            <button onClick={() => props.removeTaskByIndex(index)}>Delete</button>
                        </div>
                    </div>

                );})}
        </>
    )
};

export default TasklistDisplay;