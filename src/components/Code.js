import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import D3GDPMap from './code-projects/D3GDPMap';
import Frond from './code-projects/Frond';
import Nursery from './code-projects/Nursery';
import Pokemon from './code-projects/Pokemon';
import WeatherApp from './code-projects/WeatherApp';
import D3Guns from './code-projects/D3Guns';


const Code = () => {
  return (
    <section className="Projects">
      <header className="Title"><h1>Coding Projects</h1></header>
      <article className="Main__content">
        <Frond />
        <WeatherApp />
        <D3Guns />
        <D3GDPMap />
        <Nursery />
        <Pokemon />
      </article>
    </section>
  )
}

export default Code;