import React, { useEffect, useState } from "react";
import { useOutletContext, Redirect } from "react-router-dom";
import axios from 'axios';

const Signin = () => {
  const [link, setLink, user, setUser] = useOutletContext();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    setLink('auth');
  }, [])

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      username: username,
      password: password,
    }
    axios.post('https://renas-blog.herokuapp.com/auth/sign-in', userObj)
      .then(res => {
        localStorage.setItem('jwtToken', res.data.token);
        localStorage.setItem('jwtUsername', res.data.username.username);
        localStorage.setItem('jwtUserId', res.data.username._id);
        axios.defaults.headers.common['Authorization'] =
          'Bearer' + res.data.token
        setUser({
          auth: true,
          name: res.data.username
        })
      })
      .catch(err => {
        if (err.response) {
          if (err.response.status === 401) {
            setError('Incorrect username or password, please try again.');
          }
          else {
            setError('Something went wrong, please try again.');
          }
        }
      }
    )
  }

  return (
    <section className="Signin Gradient">
      <article className="Auth__Container">
        <h5>Sign in to your existing account</h5>
        <p className="Error">{error}</p>
        { localStorage.jwtToken === undefined ?
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username*</label>
          <input type="text" id="username" name="username" onChange={handleUsername} value={username} placeholder="Username" required/>
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" name="password" onChange={handlePassword} value={password} placeholder="Password" autocomplete="current-password" required/>
          <button>Login</button>
        </form> : <p>You've successfully logged in!</p>
        }
      </article>
    </section>
  )
}

export default Signin;