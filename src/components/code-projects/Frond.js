import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const D3Guns = () => {

  return (
    <article className="Proj">
      <header><h2>Creating a Full-Stack Community App</h2></header>
      <div className="Proj__img-wrapper"><img src="/Frond.png" alt="Choropleth map of GDP per capita" /></div>
      <div className="Proj__desc-wrapper">
        <p>I'm currently building out an app idea called Frond with the purpose of helping people build closer connections to the people that they care about. I designed the design system and built out all the components myself in React. I also built out the API using Express / Mongo and created an authentication system utilizing JSON Web Tokens, Passport, and Cookies.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">React</li>
            <li className="Proj__label">Node / Express</li>
            <li className="Proj__label">Design System</li>
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href="https://github.com/renakuai/frond-app" target="_blank" rel="noreferrer">View Code →</a>
        </div>
      </div>
    </article>
  )
}

export default D3Guns;