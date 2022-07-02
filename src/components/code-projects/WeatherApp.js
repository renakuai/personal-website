import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const WeatherApp = () => {

  return (
    <article className="Proj">
      <header><h2>Animated Weather App</h2></header>
      <div className="Proj__img-wrapper"><img src="/WeatherApp.gif" alt="Weather app" /></div>
      <div className="Proj__desc-wrapper">
        <p>I wanted to play around with React themes / styled components and CSS animations so created a weather app that changes styles and animations based on the current weather of the searched location.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">React</li>
            <li className="Proj__label">CSS</li>
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href="https://renas-weather.netlify.app/" target="_blank" rel="noreferrer">View Live →</a>
        </div>
      </div>
    </article>
  )
}

export default WeatherApp;