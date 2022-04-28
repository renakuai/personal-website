import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [link, setLink] = useOutletContext();
  const [apiLoaded, setApiLoaded] = useState(false);

  const getPostList = () => {
    fetch('https://renas-blog.herokuapp.com/writing')
      .then((res) => res.json())
      .then((res) => {
        setPostList(res);
        setApiLoaded(true);
      })
  }

  console.log(localStorage);


  useEffect(() => {
    setLink('writing');
    getPostList()
  }, [])
  
  return (
    <section className="PostList Gradient">
      <div className= "Main__Grid">
        <main className="Blog">
          <h1>Writing</h1>
          { postList.map((item) => {
            return <article key={item._id} className="Post" style={{ display: apiLoaded ? 'block': 'none' }}>
              <h5 className = "Post__Link">
                <Link to={`/postdetail/${item._id}`}>
                  {item.title}
                </Link>
              </h5>
              <p className="Post__Date">{item.date_formatted}</p>
            </article>
            })
          }
          <article className="Loading" style={{ display: apiLoaded ? 'none' : 'block'}}>
            <p>Sorry, looks like my API needs a a few extra seconds to wake up. Loading content now!</p>
          </article>
        </main>
      </div>
    </section>
  )
}

export default PostList;