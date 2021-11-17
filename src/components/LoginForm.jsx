import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Link} from 'react-router-dom';
import SignUp from './Signup';
const projectID = '9ebe2971-41d5-4692-8390-157ba0047d80';
const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ping, setping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  }
  if (!ping)
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Welcome to Teams</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button><br/>
            <Link to='/signup' component={SignUp} onClick={()=>setping(!ping)} style={{fontSize:'15px',color:'black'}}>Not a member? Register now</Link>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
  else return(<SignUp/>)
};
export default Modal;
