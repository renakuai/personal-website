import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import D3GDPMap from './code-projects/D3GDPMap';

const About = () => {
  return (
    <section className="About">
      <header className="Title"><h1>Hi, I'm Rena</h1></header>
      <article className="Intro">
        <p>I'm a Designer turned Coder, ex-Product Manager, and lifelong learner who is passionate about design, code, data visualizations, and, simply, building great products.</p>
        <p>Over the last year or so, I've become passionate about closing the gap between design and code and making my Figma files come to life. This realization has led me towards becoming a Design Technologist / UX Engineer / Frontend Engineer. I completed The Odin Project's Full-stack Javascript Curriculum where I learned vanilla JS fundamentals, React, Node / Express, Mongoose / MongoDB and am now building side projects on my own.</p>
        <p>When I'm not coding or designing, I love being active, hanging out with my cat, and <a href="https://www.instagram.com/renamakesart">painting with watercolors</a> (although I haven't done so in a longggg while).</p>
      </article>
      <article className="Main__content">
        <header className="Subtitle"><h2>Experience</h2></header>
        <div className="Exp-wrapper">
          <div className="Exp-left">
            <article className="Exp__education">
              <h5>Education</h5>
              <p className="Exp--education">Massachusetts Institute of Technology (MIT)</p>
              <p className="Exp--desc">BS, Bachelor of Science</p>
              <p className="Exp--year">2008 - 2012</p>
            </article>

            <article className="Exp__toolbox">
              <h5>Toolbox</h5>
              <ul className="Toolbox">
                <li>React</li>
                <li>Javascript</li>
                <li>Figma</li>
                <li>Express / Node</li>
                <li>D3</li>
                <li>MongoDB</li>
                <li>HTML / CSS</li>
              </ul>
            </article>
          </div>
          <div className="Exp-right">
            <article className="Exp__jobs">
              <h5>What I'm currently doing...</h5>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>Self-learning / side projects</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2022 - Current</p>
                </div>
                <p className="Exp--desc">Building side projects and diving into the nuances of fullstack Javascript (MongoDB, Express, Node, and React) and playing with data visualizations in D3.</p>
              </article>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>Salesforce</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2022 - Current</p>
                </div>
                <p className="Exp--role">Sr. Product Designer</p>
              </article>
              <h5>Past Experience</h5>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>Iterable</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2019 - 2022</p>
                </div>
                <p className="Exp--role">Sr. Product Designer</p>
              </article>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>Gatsby</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2020</p>
                </div>
                <p className="Exp--role">Sr. Product Designer</p>
              </article>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>15Five</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2019 - 2020</p>
                </div>
                <p className="Exp--role">Sr. Product Designer</p>
              </article>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>Cloudbees</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2019</p>
                </div>
                <p className="Exp--role">Sr. Product Designer</p>
              </article>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>StatMuse</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2016 - 2018</p>
                </div>
                <p className="Exp--role">UX Designer</p>
              </article>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>Citibank</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2014 - 2015</p>
                </div>
                <p className="Exp--role">Product Manager</p>
              </article>
              <article className="Exp__job">
                <div className="Exp__job-wrapper">
                  <h6>S&P Capital IQ</h6>
                  <div className="Line"></div>
                  <p className="Exp--year">2012 - 2014</p>
                </div>
                <p className="Exp--role">Mobile Business Analyst II</p>
              </article>
            </article>

          </div>
        </div>
      </article>

    </section>
  )
}

export default About;