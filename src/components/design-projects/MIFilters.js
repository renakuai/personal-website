import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const MIFilters = () => {

  return (
    <article className="Proj">
      <header><h2>Improved Filtering @Iterable</h2></header>
      <div className="Proj__img-wrapper Proj__design"><img src="/MIFilters.gif" alt="Cross channel analytics at Iterable" /></div>
      <div className="Proj__desc-wrapper">
        <p>This was a really fun project due to it being really focused on design systems and component creation / interaction.</p>
        <p>The original filtering system within Messaging Insights, our reporting tool, was very basic and did not allow marketers to be able to drill down into the specific datapoints that they needed in order to accurately monitor performance. This was a huge blocker in the workflows of our customers so we knew that we needed to improve our filtering capabilities.</p>
        <p>Through a mix of audits and quick user research, we were able to add a lot more functionality while also improving the user experience of our filters. Specifically, we completely reoriented the filtering to provide more space for customers, we moved to the use of pills to allow for less clicks, and we created a more robust set of multiselect components for our design system.</p>
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

export default MIFilters;