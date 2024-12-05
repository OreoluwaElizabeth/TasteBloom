import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (name === '' || phonenumber === '' || email === '' || password === '') {
        setError('Please fill in all fields.');
        return;
      }
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:8080/user/create', {
          name: name,
          phonenumber: phonenumber,
          email: email,
          password: password
        });
        console.log(response.data);
        navigate('/login');
      } catch (error) {
        console.error(error);
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>

                    <label>Name:</label>
                    <input type='text' id='username' value={name} 
                        onChange={(e) => setName(e.target.value)} required
                    />

                    <label>Phonenumber:</label>
                    <input type='phonenumber' id='phonenumber' value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)} required
                    />

                    <label>Email:</label>
                    <input type='email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />

                    <label>Password:</label>
                    <input type='password' id='password' value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />

                    {/* <label>ConfirmPassword:</label>
                    <input type='password' id='confirmPassword' value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} required
                    /> */}

                    {error && <p className='error-message'>{error}</p>}

                    <button type='submit' disabled={loading}>
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>

                    {loading && (
                        <div className='loading-animation'>
                            <div className='spinner' />
                        </div>
                    )}
                </form>
                <p className='login-link'>
                    Already have an account? <a href='/login'>Login</a>
                </p>
            </div>
        </div>
    )
};

export default Signup;