import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import D3GDPMap from './projects/D3GDPMap';
import BlogAuth from './projects/BlogAuth';
import Nursery from './projects/Nursery';
import Pokemon from './projects/Pokemon';

const Projects = () => {
  return (
    <section className="Projects">
      <header className="Title"><h1>Projects</h1></header>
      <article className="Main__content">
        <D3GDPMap />
        <BlogAuth />
        <Nursery />
        <Pokemon />
      </article>
    </section>
  )
}

export default Projects;