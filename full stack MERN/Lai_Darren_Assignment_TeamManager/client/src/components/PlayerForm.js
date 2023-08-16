import React, { useState } from 'react';

export default props => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const [prefPosition, setPrefPosition] = useState("")
    const [isError, setIsError] = useState(false);
    const nameValidationMsg = "Name must be at least 3 characters"

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, prefPosition })
        setName("");
    }
    const handleSubmit = e => {
        setName(e.target.value);
        e.target.value.length < 3 ? setIsError(true) : setIsError(false);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input type="text" onChange={(e) => handleSubmit(e)} value={name} />
            </p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>{isError && nameValidationMsg}</p>

            <p>
            <label>Preferred Position</label><br />
                <input type="text" onChange={(e) => setPrefPosition(e.target.value)} value={prefPosition} />
            </p>
            <input type="submit" disabled = {name.length<3}/>
        </form>
    )

}