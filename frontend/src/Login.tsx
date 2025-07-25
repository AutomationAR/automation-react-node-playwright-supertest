import React from 'react';
import { useState } from 'react';
import { api } from './api';

export default function Login({ onLogin }: any) {
  const [username, setU] = useState('');
  const [password, setP] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/login', { username, password });
      onLogin(res.data.token);
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div>
      <input placeholder="Username" onChange={e => setU(e.target.value)} />
      <input placeholder="Password" onChange={e => setP(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
