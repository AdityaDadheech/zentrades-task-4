import React, { useState } from 'react';
import "./Login.css";
import smart_serv from "./smart_serv.jpg"

export const LoginDashboard = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const login = () => {
    if (!validateEmail(formData.username)) {
      setErrorMessage('Invalid email format');
      return;
    }

    if (!validatePassword(formData.password)) {
      setErrorMessage('Invalid password format');
      return;
    }
    setErrorMessage('');
    alert('Login successful!');
  };

  const forgotPassword = () => {
    window.location.href = 'mailto:support@smartserv.io?subject=Password Reset Request';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]+$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="login-container">
        <img src={smart_serv} alt="" />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form>
        <input
          type="email"
          id="username"
          name="username"
          placeholder='username'
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder='password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={login}>Login</button>
        <a href='/' onClick={forgotPassword}>Forgot your password?</a>
      </form>
    </div>
  );
};