import React from "react";
import { Link } from "react-router-dom";
import Auth from './Auth';
import axios from 'axios';

const Nav = (userProps) => {
  const { user, setUser } = userProps;

  const handleLogout = (e) => {
    e.preventDefault();
    axios.post('https://renas-blog.herokuapp.com/auth/logout')
      .then(res=>{
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        setUser({
          auth: false,
          name: ''
        })
        console.log(localStorage.jwtToken)
      })
    .catch(err=>console.log(err))
  }
    
  return (
    <nav className="Nav__Main">
      <div className="Main__Grid">
        <ul className="Nav__Main">
          <li className="Nav__Item"><Link to="/" >Rena Kuai</Link></li>
          <div className="Nav__Right">
            <ul className="Nav__Right">
              <li className="Nav__Item"><Link to="/code" >Code</Link></li>
              <li className="Nav__Item"><Link to="/design" >Design</Link></li>
              <li className="Nav__Item"><Link to="/writing" >Writing</Link></li>
              <li className="Nav__Item Border">
                {localStorage.jwtToken === undefined ? <button><Link to="/auth" >Sign in</Link></button> : <button onClick={handleLogout}>Logout</button>}
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav >
  )
}

export default Nav;