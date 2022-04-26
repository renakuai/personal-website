import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [ link, setLink ] = useOutletContext();

  const getPostList = () => {
    fetch('https://renas-blog.herokuapp.com/writing')
      .then((res) => res.json())
      .then((res) => {
        setPostList(res);
      })
  }

  useEffect(() => {
    setLink('writing');
    getPostList()
  }, [])

  console.log(postList);
  
  return (
    <section className="PostList Gradient">
      <div className= "Main__Grid">
        <main className="Blog">
          <h1>Writing</h1>
          { postList.map((item) => {
            return <article key={item._id} className="Post">
              <h5 className = "Post__Link">
                <Link to={`/postdetail/${item._id}`}>
                  {item.title}
                </Link>
              </h5>
              <p className="Post__Date">{item.date_formatted}</p>
            </article>
            })
          }
        </main>
      </div>
    </section>
  )
}

export default PostList;