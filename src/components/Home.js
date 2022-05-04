import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import D3GDPMap from './projects/D3GDPMap';

const Home = () => {
  return (
    <section className="Home">
      <header className="Title"><h1>Hi, I'm Rena</h1></header>
      <article className="Intro">
        <p>I'm a multi-faceted creator who loves working with data and building products from 0 to the 🌛 .</p>
        <p>Over the last year or so, I've become passionate about closing the gap between design and code and making my Figma files come to life. This realization has led me towards becoming a Design Technologist or a Front-End focused engineer. I'm currently deep diving into the world of full-stack Javascript (React, MongoDB, Node, Express), CSS, and building data visualizations using D3.</p>
      </article>
      <nav className = "Nav__external">
        <a href="https://github.com/renakuai">Github</a>
        <a href="https://linkedin.com/in/renakuai">Linkedin</a>
        <a href="mailto:rena.kuai@gmail.com">Email me</a>
      </nav>
      <article className="Main__content">
        <header className="Subtitle"><h5>Most Recent Project</h5></header>
        <D3GDPMap />
      </article>
    </section>
  )
}

export default Home;