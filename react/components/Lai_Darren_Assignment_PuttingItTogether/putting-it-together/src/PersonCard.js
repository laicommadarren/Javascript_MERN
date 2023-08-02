import React, {useState} from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    
    const ageAdder = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <h1>
                {props.lastname}, {props.firstname}
            </h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ ageAdder }>Birthday Button for {props.firstname} {props.lastname}</button>
        </div>
    )

}

export default PersonCard;
