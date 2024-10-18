import React, { useState } from 'react';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Reset error
    setError('');

    // Validate input
    if (!username || !password) {
      setError('Both fields are required');
      console.error('Both fields are required');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      console.error('Password too short');
    } else if (!/[A-Z]/.test(password) && !/[a-z]/.test(password)) {
      setError('Password must contain at least one uppercase or one lowercase letter.');
      console.error('Password must contain upper or lower case letters');
    } else {
      const confirmLogin = window.confirm('Do you allow us to log you in?');
      if (confirmLogin) {
        setError('');
        console.log('Login successful');
        window.location.href = '/list'; // Redirect to the list view
      } else {
        console.log('Login cancelled');
      }
    }
  };

  return (
    <div className="login-container">
      <img src="/login-image.jpeg" alt="Login Illustration" className="login-image" />
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <div className="password-container">
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
