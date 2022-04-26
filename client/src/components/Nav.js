import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { link } = props;
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
            </ul>
          </div>
        </ul>
      </div>
    </nav >
  )
}

export default Nav;