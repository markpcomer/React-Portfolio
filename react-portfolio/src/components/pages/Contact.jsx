import React from "react";
import { useState } from 'react';

import { checkPassword, validateEmail } from '../../utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;
        }
        if (!checkPassword(password)) {
            setErrorMessage(`Choose a more secure password for the account: ${userName}`);
            return;
        }
        alert(`Hello ${userName}`);

        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
        <div className="userForm text-center">
            <h1>Hello ${userName}</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input 
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="email"
                />
                <input 
                    type="text"
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    placeholder="username"
                />
                <input 
                    type="password" 
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Form;
