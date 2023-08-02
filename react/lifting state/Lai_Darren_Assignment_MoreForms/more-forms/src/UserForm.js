import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameAtLeastTwoChars, setFirstNameAtLeastTwoChars] = useState("");
    const [lastNameAtLeastTwoChars, setLastNameAtLeastTwoChars] = useState("");
    const [emailAtLeastFiveChars, setEmailAtLeastFiveChars] = useState("");
    const [passwordAtLeastEightChars, setPasswordAtLeastEightChars] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState("");


    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        

    };

    const firstNameValidation = (e) => {

        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameAtLeastTwoChars("First Name must be at least 2 characters");
        }
        else {
            setFirstNameAtLeastTwoChars("")
        }
    };

    const lastNameValidation = (e) => {

        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameAtLeastTwoChars("Last Name must be at least 2 characters");
        }
        else {
            setLastNameAtLeastTwoChars("")
        }
    };
    const emailValidation = (e) => {

        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailAtLeastFiveChars("Email must be at least 5 characters.");
        }
        else {
            setEmailAtLeastFiveChars("")
        }
    };
    const passwordValidation = (e) => {

        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordAtLeastEightChars("Password must be at least 8 characters");
        }
        else {
            setPasswordAtLeastEightChars("")
        }
    };
    const passwordMatch = () => {

        if (password !== confirmPassword && password.length > 0 && confirmPassword.length > 0) {
            setPasswordsMatch("Passwords must match");
        }
        else {
            setPasswordsMatch("")
        }
    };

    const firstNameFunctions = (e) => {
        setFirstName(e.target.value);
        firstNameValidation(e);
        
    };
    const lastNameFunctions = (e) => {
        setLastName(e.target.value);
        lastNameValidation(e);
    };
    const emailFunctions = (e) => {
        setEmail(e.target.value);
        emailValidation(e);
    };
    const passwordFunctions1 = (e) => {
        setPassword(e.target.value);
        passwordValidation(e);
    };
    const passwordFunctions2 = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value && password.length > 0 && e.target.value.length > 0) {
            setPasswordsMatch("Passwords must match");
        }
        else {
            setPasswordsMatch("")
        }
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => firstNameFunctions(e)} />
                </div>
                <p>{firstNameAtLeastTwoChars}</p>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => lastNameFunctions(e)} />
                </div>
                <p>{lastNameAtLeastTwoChars}</p>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(e) => emailFunctions(e)} />
                </div>
                <p>{emailAtLeastFiveChars}</p>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => passwordFunctions1(e)} />
                </div>
                <p>{passwordAtLeastEightChars}</p>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => passwordFunctions2(e)} />
                    <input type="submit" value="Create User" />
                </div>
                <p>{passwordsMatch}</p>
            </form>
            <div>
                <p>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email Address: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm;