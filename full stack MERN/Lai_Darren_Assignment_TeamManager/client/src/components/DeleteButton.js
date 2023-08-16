import React from 'react'
    
export default props => {
    const { successCallback } = props;

    const handleClick = () => {
        const response = window.confirm("Please confirm deletion of player");
        if (response) {
        successCallback();
        }
        
    }

    return (
        <button onClick={handleClick}>
            Delete
        </button>
    )
}