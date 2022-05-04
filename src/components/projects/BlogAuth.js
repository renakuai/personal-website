import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const D3GDPMap = () => {

  return (
    <article className="Proj">
      <header><h2>Creating an API & Auth System for my Blog</h2></header>
      <div className="Proj__img-wrapper"><img src="/BlogAuth.png" alt="Comment field" /></div>
      <div className="Proj__desc-wrapper">
        <p>My first full-stack project utilizing Express / MongoDB on the back-end and React on the front-end. I created an API to manage Blog Posts and Comments and also an auth system using JSON web tokens / Passport. I implemented this on a previous version of my personal website, which is where this project lives.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">React</li>
            <li className="Proj__label">Express</li>
            <li className="Proj__label">MongoDB</li>
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href="https://rena-blog-auth.netlify.app/writing" target="_blank" rel="noreferrer">View Live →</a>
        </div>
      </div>
    </article>
  )
}

export default D3GDPMap;