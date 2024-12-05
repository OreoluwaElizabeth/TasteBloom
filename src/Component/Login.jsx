import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Please fill in the right details.');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/user/login', {
              email: email,
              password: password
            });
            console.log(response.data);
            navigate('/dashboard');

        } catch (error) {
            console.error(error);
            setError('Invalid email or password.');
        } finally {
            setLoading(false);
        }
      
    };
    return (
        <div className='login-container'>
            <div className='login-form'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type='email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password:</label>
                    <input type='password' id='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className='error-message'>{error}</p>}

                    <button type='submit' disabled={loading}>
                        {loading ? 'Logging in...' : 'Log in'}
                    </button>

                    {loading && (
                        <div className='loading-animation'>
                            <div className='spinner' />
                        </div>
                    )}
                </form>
                <p className='signup-link'>
                    Don't have an account? <a href='/signup'>Signup</a>
                </p>
            </div>
        </div>
    )
};

export default Login;