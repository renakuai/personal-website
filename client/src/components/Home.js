import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";


const Home = () => {
  const [link, setLink] = useOutletContext();
  
  useEffect(() => {
    setLink('home');
  }, [])
  
  return (
    <section className="Home Pink">
      <div className= "Main__Grid">
        <main>
          <header className="Name">
            <h1>Hi, I'm</h1> <img className="Signature" src="images/name-red.svg" alt="Cursive image of my name, Rena" />
          </header>
      
          <div className = "Accent">
            <img src="images/cyanaccent.svg" />
          </div>
          <article className = "Intro">
            <div className="Intro__Text-Wrapper">
                <p>I'm a multi-faceted Design Technologist who loves building and designing products from 0 to the 🌛.</p>

                <p>Over the last year or so, I've become passionate about closing the gap between design and code and making my Figma files come to life.
                These realizations have led me down the path of becoming a Design Technologist / Front-End Engineer. Currently, I've been diving deep into the nuances of Javascript, React, CSS, and the MERN stack and building random web apps along the way.</p>
        
                <p>When I'm not working, I like to watch a lot of tv, go for runs outside, obsess over my cat, and occasionally <a href="https://www.instagram.com/renamakesart">watercolor paint</a>.</p>
              
                <p className="footnote">*I built this website using a React front-end and Express / MongoDB backend</p>
              </div>
          </article>

          <article className = "Links">
              <nav className = "Nav__External">
                <a href="https://github.com/renakuai">Github</a>
                <a href="https://linkedin.com/in/renakuai">Linkedin</a>
                <a href="mailto:rena.kuai@gmail.com">Email me</a>
              </nav>
          </article>

          <article className = "Resume">
              <div className = "Resume__Side-Wrapper">
                <article className = "Resume__Education">
                  <h6>Education</h6>
                  <p><b>Massachusetts Institute of Technology</b></p>
                  <p>BS, Management Science</p>
                  <p className = "Resume__Year">2008 - 2012</p>
                </article>

                <article className = "Resume__Toolbox">
                  <h6>Toolbox</h6>
                  <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>HTML / CSS</li>
                    <li>Figma</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Webpack</li>
                  </ul>
                </article>
              </div>

              <div className = "Resume__Main-Wrapper">
                <h6>What I'm currently doing</h6>
                <section className = "Resume__Current">
                  <article className = "Resume__Experience">
                    <p><b>Salesforce</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p>Sr. Product Designer</p>
                      <div className = "Pink Line"></div>
                      <p className = "Resume__Year">2022 - Now</p>
                    </div>
                  </article>

                  <article className = "Resume__Experience">
                    <p><b>Front-end coding, self-learning</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p className = "No-Year">Learning front-end through The Odin Project and a variety of other sources and building side projects along the way using both front-end and back-end technologies.</p>
                    </div>
                  </article>
                </section>

                <h6>Past experience</h6>
                  <section className = "Resume__Past">
                    <article className = "Resume__Experience">
                      <p><b>Iterable</b></p>
                      <div className = "Resume__Role-Wrapper">
                        <p>Sr. Product Designer</p>
                        <div className = "Pink Line"></div>
                        <p className = "Resume__Year">2020 - 2022</p>
                      </div>
                    </article>

                  <article className = "Resume__Experience">
                    <p><b>Gatsby</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p>Sr. Product Designer</p>
                      <div className = "Pink Line"></div>
                      <p className = "Resume__Year">2020</p>
                    </div>
                  </article>

                  <article className = "Resume__Experience">
                    <p><b>15Five</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p>Sr. Product Designer</p>
                      <div className = "Pink Line"></div>
                      <p className = "Resume__Year">2019 - 2020</p>
                    </div>
                  </article>

                  <article className = "Resume__Experience">
                    <p><b>Cloudbees</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p>Sr. Product Designer</p>
                      <div className = "Pink Line"></div>
                      <p className = "Resume__Year">2019</p>
                    </div>
                  </article>

                  <article className = "Resume__Experience">
                    <p><b>StatMuse</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p>UX Designer</p>
                      <div className = "Pink Line"></div>
                      <p className = "Resume__Year">2016 - 2018</p>
                    </div>
                  </article>

                  <article className = "Resume__Experience">
                    <p><b>Citibank</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p>Product Manager</p>
                      <div className = "Pink Line"></div>
                      <p className = "Resume__Year">2014 - 2015</p>
                    </div>
                  </article>

                  <article className = "Resume__Experience">
                    <p><b>S&P Capital IQ</b></p>
                    <div className = "Resume__Role-Wrapper">
                      <p>Mobile Business Analyst II</p>
                      <div className = "Pink Line"></div>
                      <p className = "Resume__Year">2012 - 2014</p>
                    </div>
                  </article>
                
          </section>
            </div>
          </article>
        </main>
      </div> 
    </section>
  )
}

export default Home;