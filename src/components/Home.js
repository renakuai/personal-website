import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import WeatherApp from './code-projects/WeatherApp';

const Home = () => {
  return (
    <section className="Home">
      <header className="Title"><h1>Hi, I'm Rena</h1></header>
      <article className="Intro">
        <p>I'm a designer turned coder and lifelong learner who is passionate about design, code, data visualizations, and, simply, building great products.</p>
        <p>Over the last year or so, I've become passionate about closing the gap between design and code and making my Figma files come to life. This realization has led me towards becoming a Design Technologist / UX Engineer. I completed The Odin Project's Full-stack Javascript Curriculum where I learned vanilla JS fundamentals, React, Node / Express, Mongoose / MongoDB and am now building side projects on my own.</p>
        <p>When I'm not coding or designing, I love being active, hanging out with my cat, and <a href="https://www.instagram.com/renamakesart">painting with watercolors</a> (although I haven't done so in a longggg while).</p>
      </article>
      <nav className="Nav__external">
        <a href="https://github.com/renakuai">Github</a>
        <a href="https://linkedin.com/in/renakuai">Linkedin</a>
        <a href="mailto:rena.kuai@gmail.com">Email me</a>
      </nav>
      <article className="Main__content">
        <header className="Subtitle"><h5>Something I've built recently...</h5></header>
        <WeatherApp />
      </article>
    </section>
  )
}

export default Home;