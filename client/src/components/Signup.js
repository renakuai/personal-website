import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from 'axios';
import { useForm } from "react-hook-form";

const Signup = () => {
  const [link, setLink] = useOutletContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [createdAccount, setCreatedAccount] = useState(false);

  const { register, handleSubmit, formState: { errors }, clearErrors} = useForm({
    criteriaMode: "all", mode: "onChange"
  });
  
  useEffect(() => {
    setLink('auth');
  }, [])

  const handleUsername = (e) => {
    clearErrors("username");
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    clearErrors("password");
    setPassword(e.target.value)
  }

  const handleEmail = (e) => {
    clearErrors("email");
    setEmail(e.target.value)
  }

  const onSubmit = (e) => {
    setCreatedAccount(true);
    const userObj = {
      username: username,
      email: email,
      password: password,
      isAdmin: false
    }
    axios.post('https://renas-blog.herokuapp.com/auth/sign-up', userObj)
      .then(res => {
        console.log(res);
      })
  }

  return (
    <section className="Signup Gradient">
      <article className="Auth__Container">
      <h5>Create an account</h5>
        {!createdAccount ?
          <form className="Auth__Form" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username*</label>
            <input
              type="text"
              {...register('username', {
                maxLength: {
                  value: 15,
                  message: 'Usernames can only have a max of 15 characters'
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: 'Usernames can only have alphanumeric characters'
                }
              })}
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleUsername}
              value={username}
              required
            />
            {errors.username && <p className="Error">{errors.username.message}.</p>}
            
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              {...register('password', {
                pattern: {
                  value: /(?=.*\W)/,
                  message: "Passwords must contain at least 1 special character"
                },
                minLength: {
                  value: 8,
                  message: 'Passwords must have at least 7 characters'
                }
              })}
              id="password"
              name="password"
              placeholder="Password"
              onChange={handlePassword}
              value={password}
              autocomplete="new-password"
              required />
            {errors.password && <p className="Error">{errors.password.message}</p>}
            
            <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" placeholder="Email" onChange={handleEmail} value={email} required />
            <button>Create account</button>
          </form> : <article className = "Auth__Success">Successfully created your account! Please click sign in to login to your account.</article>
        }
      </article>
    </section>
  )
}

export default Signup;