import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const D3GDPMap = () => {

  return (
    <article className="Proj">
      <header><h2>Nursery Inventory CRUD App</h2></header>
      <div className="Proj__img-wrapper"><img src="/Nursery.png" alt="Comment field" /></div>
      <div className="Proj__desc-wrapper">
        <p>A nursery inventory CRUD app created in Express (front-end using Pug) and MongoDB as a database.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">Express</li>
            <li className="Proj__label">MongoDB</li>
          </ul>
        </div>
        <div className="Proj__data-left">
          <a className="Proj__link" href="https://blooming-citadel-00109.herokuapp.com/inventory" target="_blank" rel="noreferrer">View Live →</a>
        </div>
      </div>
    </article>
  )
}

export default D3GDPMap;