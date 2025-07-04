import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "RyansGiveaways@gmail.com" && password === "Placeholderpassword") {
      navigate('/admin/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div>
      <h1>Admin Login</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
