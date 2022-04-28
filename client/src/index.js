import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Post from './components/Post.js';
import PostList from './components/PostList';
import Code from './components/Code';
import Design from './components/Design';
import Home from './components/Home';
import Auth from './components/Auth';
import Signin from './components/Signin';
import Signup from './components/Signup';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="code" element={<Code />} />
          <Route path="design" element={<Design />} />
          <Route path="writing" element={<PostList />} />
          <Route path="postdetail/:id" element={<Post />} />
          <Route path="auth" element={<Auth />} >
            <Route index element={<Signin />}/>
            <Route path="signup" element={<Signup />} />
          </Route >
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
