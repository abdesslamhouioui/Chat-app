import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[repeat,setrepeat]= useState('')
  const [error, setError] = useState('');
  const [ping, setping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {if (password===repeat)
     { await axios.post('https://api.chatengine.io/users/', { username: username, secret: password },{ headers: { 'Private-Key': '5cd11a02-32cf-4ada-8e4e-0286f34baee7' } });
      setError('User created successfully')}
      else setError('Oops, incorrect credentials.')
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  }
  if(!ping)
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Welcome to Teams</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <input type="password" value={repeat} onChange={(e) => setrepeat(e.target.value)} className="input" placeholder="Repeat Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>SignUp</span>
            </button>
            <Link to='/signup' component={SignUp} onClick={()=>setping(!ping)} style={{fontSize:'15px',color:'black'}}>Already member? Login</Link>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
  else return(<LoginForm/>)
};

export default SignUp;
