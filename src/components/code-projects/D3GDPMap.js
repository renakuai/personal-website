import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const D3GDPMap = () => {

  return (
    <article className="Proj">
      <header><h2>Visualizing GDP per Capita Using a Choropleth Map</h2></header>
      <div className="Proj__img-wrapper"><img src="/D3GDPMap.png" alt="Choropleth map of GDP per capita" /></div>
      <div className="Proj__desc-wrapper">
        <p>My first project working with D3 in conjunction with React. I utilized and manipulated several year's worth of GDP data from The World Bank and geo methods from D3 to create a map.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">React</li>
            <li className="Proj__label">D3</li>
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href="https://d3playground.netlify.app/" target="_blank" rel="noreferrer">View Live →</a>
        </div>
      </div>
    </article>
  )
}

export default D3GDPMap;