import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const D3Guns = () => {

  return (
    <article className="Proj">
      <header><h2>Visualizing Gun Rights v Gun Control Funding</h2></header>
      <div className="Proj__img-wrapper"><img src="/D3Guns.png" alt="Choropleth map of GDP per capita" /></div>
      <div className="Proj__desc-wrapper">
        <p>I utilized data from OpenSecrets.gov to visualize the difference in gun rights v gun control funding in the US. I also plotted funding received by our current congressmen. The trickiest thing for this project was to keep D3 as the calculation engine and use React for the rendering.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">React</li>
            <li className="Proj__label">D3</li>
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href="https://gun-views.netlify.app/" target="_blank" rel="noreferrer">View Live →</a>
        </div>
      </div>
    </article>
  )
}

export default D3Guns;