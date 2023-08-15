import React, { useState } from 'react';

export default props => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name })
        setName("");
    }


    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <input type="submit" />
        </form>
    )

}