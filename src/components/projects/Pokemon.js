import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const D3GDPMap = () => {

  return (
    <article className="Proj">
      <header><h2>Pokemon Memory Game</h2></header>
      <div className="Proj__img-wrapper"><img src="/Pokemon.png" alt="Comment field" /></div>
      <div className="Proj__desc-wrapper">
        <p>A Pokemon memory game made in React. I had a lot of fun creating this retro UI.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">React</li>
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href="https://renakuai.github.io/memory-game/" rel="noreferrer">View Live →</a>
        </div>
      </div>
    </article>
  )
}

export default D3GDPMap;