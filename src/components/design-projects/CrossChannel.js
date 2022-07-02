import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const CrossChannel = () => {

  return (
    <article className="Proj">
      <header><h2>Cross-Channel Analytics @Iterable</h2></header>
      <div className="Proj__img-wrapper Proj__design"><img src="/CrossChannel.gif" alt="Cross channel analytics at Iterable" /></div>
      <div className="Proj__desc-wrapper">
        <p>This was a challenging project due to tight time constraints and technical limitations, however our team was able to work together to create a successful feature in a short period of time.</p>
        <p>This was an important feature because our customers oftentimes have marketing initiatives that span across multiple mediums (email, SMS, etc.), but we did not provide them with the ability to view analytics across their channels at once. Because of this, it was hard for customers to get a holistic understanding of the performance of their initiatives.</p>
        <p>Through a mix of quick user research, cross-functional collaboration, and user testing, we were able to completely revamp Messaging Insights to support this new paradigm. Specifically, we updated our navigation design, improved our data visualizations, updated our tables, designed for all entry points, and did some future explorations as well.</p>
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

export default CrossChannel;