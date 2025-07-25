import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Todo from './Todo';

export default function App() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <div>
      {!token ? (
        <Login onLogin={setToken} />
      ) : (
        <Todo />
      )}
    </div>
  );
}
