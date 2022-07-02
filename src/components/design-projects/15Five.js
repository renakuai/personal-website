import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const FifteenFive = () => {

  return (
    <article className="Proj">
      <header><h2>Reporting @15Five</h2></header>
      <div className="Proj__img-wrapper Proj__design"><img src="/15Five.png" alt="15Fives dashboard" /></div>
      <div className="Proj__desc-wrapper">
        <p>This was a really fulfilling project because we were able to create a product that customers loved while also maintaining our principles of not reducing people to a stack ranked list.</p>
        <p>15Five is a talent / HR management platform that allows companies to understand the engagement of their employees. Reporting was critical for that understanding, however, the original 15Five reporting dashboard was missing a lot of important datapoints and needed an updated design language.</p>
        <p>Through a mix of working with Product and user interviews, we were able to deliver a completely revamped reporting experience. Design changes included a new navigation system, improved charting across the board, revamping of metric definitions, integration of metrics from across the platform, etc.</p>
      </div>
      <div className="Proj__data-wrapper">
        <div className="Proj__data-right">
          <ul>
            <li className="Proj__label">Lead + Only Designer</li>
          </ul>
        </div>
        <div className="Proj__data-left">
        </div>
      </div>
    </article>
  )
}

export default FifteenFive;