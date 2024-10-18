import React, { useState } from 'react';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Reset error
    setError('');
    setIsLoading(true);

    // Validate input
    if (!username || !password) {
      setError('Both fields are required');
      console.error('Both fields are required');
      setIsLoading(false);
      return;
    } 
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      console.error('Password too short');
      setIsLoading(false);
      return;
    } 
    if (!/[A-Z]/.test(password) && !/[a-z]/.test(password)) {
      setError('Password must contain at least one uppercase or one lowercase letter.');
      console.error('Password must contain upper or lower case letters');
      setIsLoading(false);
      return;
    }

    // Simulate login action
    setTimeout(() => {
      console.log('Login successful');
      // Redirect to the list view
      window.location.href = '/list'; 
    }, 1000); // Simulate a network request with a delay
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
