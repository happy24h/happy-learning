import React, { useState } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    const submitAdmin = () => {
        navigate('/system/user-manage');
    };
    return <div>{!formIsSubmitted ? <Login submitForm={submitForm} /> : submitAdmin()}</div>;
};
export default Form;
