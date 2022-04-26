import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Design = () => {
  const [link, setLink] = useOutletContext();
  
  useEffect(() => {
    setLink('design');
  }, [])

  return (
    <section className="Design Mint">
      <div className= "Main__Grid">
        <main>
          <h1>Design</h1>
          <article className="Empty">
            <p>Sorry! Have been busy building my blog so haven’t had time to update this page just yet.</p>
          </article>
        </main>
      </div>
    </section>
  )
}

export default Design;