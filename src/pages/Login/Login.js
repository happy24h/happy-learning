import React, { useState } from 'react';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    const submitAdmin = () => {
        navigate('/system/user-manage');
    };
    return <div>{!formIsSubmitted ? <Form submitForm={submitForm} /> : submitAdmin()}</div>;
};
export default Login;
