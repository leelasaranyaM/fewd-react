// 8. Add a Login component using ReactJS. User should be able to login, using pre-defined logins. Session 
// should be maintained using react hooks.
import React, { useState, useEffect } from 'react';
export default function Login() {
  const users = [{ username: 'admin', password: 'admin123' },{ username: 'user', password: 'user123' },];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setLoggedInUser(savedUser);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setLoggedInUser(found.username);
      localStorage.setItem('user', found.username);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };
  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('user');
    setUsername('');
    setPassword('');
  };
  return (
    <div>
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit">Login</button>
          <div style={{ color: 'red' }}>{error}</div>
        </form>
      )}
    </div>
  );
}
