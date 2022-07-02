import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CrossChannel from './design-projects/CrossChannel';
import FifteenFive from './design-projects/15Five';
import MIFilters from './design-projects/MIFilters';



const Design = () => {
  return (
    <section className="Projects">
      <header className="Title"><h1>Design Projects</h1></header>
      <p class="Subtitle">A selection of past design projects.</p>
      <article className="Main__content">
        <CrossChannel />
        <MIFilters />
        <FifteenFive />
      </article>
    </section>
  )
}

export default Design;