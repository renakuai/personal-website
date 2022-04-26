import React, { useState, useEffect } from "react";
import { useParams, useOutletContext } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState('')
  const [ link, setLink ] = useOutletContext();
  let params = useParams();

  const getPost = () => {
    fetch('https://renas-blog.herokuapp.com/writing/post/' + params.id)
      .then((res) => res.json())
      .then((res) => {
        setPost(res.postdetail);
        setComments(res.comments);
        setCommentCount(res.commentCount);
      })
  }

  useEffect(() => {
    setLink('writing');
    getPost();
  }, []);

  console.log(commentCount)

  return (
    <section className="Post Gradient">
      <div className= "Main__Grid">
        <main className="Blog">
          <section className = "Post__Main">
            <header className="Post__Header">
              <div className="Post__Header-Wrapper">
                <h1>{post.title}</h1>
                <div className="Header__Metadata-Wrapper">
                  <p>{post.date_formatted}</p>|
                  <p>{commentCount} comments</p>
                </div>
              </div>
            </header>
            <article className="Post__Content">
              <p>{post.content}</p>
            </article>
          </section>
          <section className="Post__Comments">
            <h4>Comments ({commentCount})</h4>
            {comments.map((item) => {
              return <article className="Comment">
                <div className="Comment__Metadata-Wrapper">
                  <p className="Comment__Metadata">From: {item.author.name}</p>
                  <p className="Comment__Metadata">{item.date_formatted}</p>
                </div>
                <p>{item.content}</p>
              </article>
            })}
          </section>
        </main>
      </div>
    </section>
  )
}

export default Post;