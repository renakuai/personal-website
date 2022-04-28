import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Code = () => {
  const [link, setLink] = useOutletContext();

  useEffect(() => {
    setLink('code');
  },[])

  return (
    <section className="Code Periwinkle">
      <div className="Main__Grid">
        <main>
          <h1>Code</h1>

          <article className="Code__Large">
            <h6>Larger projects</h6>
            <div className="Proj__Grid">

            <article className = "Proj">
                  <div className = "Proj__Img-Wrapper">
                    <img className = "Proj__Img" src = "images/proj-blog.svg" alt="My blog" />
                  </div>
                  <div className = "Proj__Desc-Wrapper">
                    <h5>Personal Blog</h5>
                    <p>WIP: Making this with React + Express / MongoDB as an API to store posts, comments, and handle auth ('Writing' in the nav)</p>
                  </div>
              </article>

              <article className = "Proj">
                <a className = "Proj__Link" href="https://github.com/renakuai/nursery-inventory-app">
                  <div className = "Proj__Img-Wrapper">
                    <img className = "Proj__Img" src = "images/proj-nursery.svg" alt="Nursery Inventory Project" />
                  </div>
                  <div className = "Proj__Desc-Wrapper">
                    <h5>Nursery Inventory App</h5>
                    <p>A CRUD inventory app made with Express, Node, and MongoDB</p>
                    <section className = "Proj__Links">
                      <a href = "https://github.com/renakuai/nursery-inventory-app">View code</a>
                      |
                      <a href = "https://blooming-citadel-00109.herokuapp.com/inventory">View live</a>
                    </section>
                  </div>
                </a>
              </article>

              <article className = "Proj">
            <a className = "Proj__Link" href="https://github.com/renakuai/kuai-li-family-recipes">
            <div className = "Proj__Img-Wrapper">
              <img className = "Proj__Img" src = "images/proj-recipes.svg" alt="Recipes project" />
            </div>
            <div className = "Proj__Desc-Wrapper">
              <h5>Kuai-Li Family Recipes</h5>
              <p>A CRUD recipe app made with React and Firebase.</p>
              <section className = "Proj__Links">
                <a href = "https://github.com/renakuai/kuai-li-family-recipes">View code</a>
                |
                <a href = "https://portfolio-kuaili-recipes.netlify.app/">View live</a>
              </section>
            </div>
            </a>
              </article>
            </div>
          </article>

          <article className = "Code__Small">
            <h6>Smaller projects</h6>
            <div className = "Proj__Grid">
              <article className = "Proj">
            <a className = "Proj__Link" href="https://codepen.io/rkuai/pen/XWVzBJm">
            <div className = "Proj__Img-Wrapper">
              <img className = "Proj__Img" src = "images/proj-tony.svg" alt="Animated Tony Cat made with CSS" />
            </div>
            <div className = "Proj__Desc-Wrapper">
              <h5>CSS Animation</h5>
              <p>An animation made with vanilla HTML and CSS of my cat, Tony.</p>
              <section className = "Proj__Links">
                <a href = "https://codepen.io/rkuai/pen/XWVzBJm">View live</a>
              </section>
            </div>
            </a>
              </article>

              <article className = "Proj">
            <a className = "Proj__Link" href="https://github.com/renakuai/memory-game">
            <div className = "Proj__Img-Wrapper">
              <img className = "Proj__Img" src = "images/proj-memory.svg" alt="Pokemon memory game" />
            </div>
            <div className = "Proj__Desc-Wrapper">
              <h5>Pokemon Memory Game</h5>
              <p>A Pokemon memory game made with React and the PokeAPI.</p>
              <section className = "Proj__Links">
                <a href = "https://github.com/renakuai/memory-game">View code</a>
                |
                <a href = "https://renakuai.github.io/memory-game/">View live</a>
              </section>
            </div>
            </a>
              </article>

              <article className = "Proj">
            <a className = "Proj__Link" href="https://github.com/renakuai/to-do-app">
            <div className = "Proj__Img-Wrapper">
              <img className = "Proj__Img" src = "images/proj-todo.svg" alt="A to do app" />
            </div>
            <div className = "Proj__Desc-Wrapper">
              <h5>Todo App</h5>
              <p>A to do app made with vanilla Javascript (and an illustration of an alpaca).</p>
              <section className = "Proj__Links">
                <a href = "https://github.com/renakuai/to-do-app">View code</a>
                |
                <a href = "https://renakuai.github.io/to-do-app/">View live</a>
              </section>
            </div>
            </a>
              </article>
            </div>
          </article>
        </main>
      </div>
    </section>
  )
}

export default Code;