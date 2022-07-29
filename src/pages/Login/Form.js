import React, { useState, useEffect } from 'react';
import validation from './validation';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Form = ({ submitForm }) => {
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);
    return (
        <div className={cx('container')}>
            <div className={cx('app-wrapper')}>
                <div>
                    <h2 className={cx('title')}>Create Account!</h2>
                </div>
                <form className={cx('form-wrapper')}>
                    <div className={cx('name')}>
                        <label className={cx('label')}>Full Name</label>
                        <input
                            className={cx('input')}
                            type="text"
                            name="fullname"
                            value={values.fullname}
                            onChange={handleChange}
                        />
                        {errors.fullname && <p className={cx('error')}>{errors.fullname}</p>}
                    </div>

                    <div className={cx('email')}>
                        <label className={cx('label')}>Email</label>
                        <input
                            className={cx('input')}
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={cx('error')}>{errors.email}</p>}
                    </div>

                    <div className={cx('password')}>
                        <label className={cx('label')}>Password</label>
                        <input
                            className={cx('input')}
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className={cx('error')}>{errors.password}</p>}
                    </div>

                    <div>
                        <button className={cx('submit')} onClick={handleFormSubmit}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Form;
