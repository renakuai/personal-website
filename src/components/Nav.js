import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

const Nav = (props) => {
  const { light, setLight, dark, setDark } = props;

  function handleTheme() {
    if (light) {
      setDark(true);
      setLight(false);
    }
    if (dark) {
      setDark(false);
      setLight(true);
    }
  }

  return (
    <nav className="Nav__main">
      <ul>
        <li><Link to='/'>Rena Kuai</Link></li>
      </ul>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li>{light ? <div className="Toggle"><label class="switch"><input onClick={handleTheme} type="checkbox" /><span class="slider round"></span></label></div> : <div className="Toggle"><label class="switch"><input onClick={handleTheme} type="checkbox" /><span class="slider round"></span></label></div>}</li>
      </ul>
    </nav>
  )
}

export default Nav;