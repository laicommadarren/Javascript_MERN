import react, { useState } from 'react';

const Tasklist = (props) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e, index) => { // the second parameter, by default, points to the index of e
        e.preventDefault();
        props.setShowList([...props.showList,
        // this contains all the data
        {
            message: task, isChecked : false
        }])
        setTask("");
    }

    return (
        <form onSubmit={(e, index) => handleSubmit(e, index)}>
            <p>Type a task and click "Add" to add a task to the list</p>
            <input
                type="text"
                name="taskInput"
                onChange={(e) => setTask(e.target.value)}
                value={task} />
            <input type="submit" value="Add Task" />
        </form>
    );
}

export default Tasklist;