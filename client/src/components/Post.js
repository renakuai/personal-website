import React, { useState, useEffect } from "react";
import { useParams, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";


const Post = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState('')
  const [link, setLink] = useOutletContext();
  const [apiLoaded, setApiLoaded] = useState(false);
  const [content, setContent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  let params = useParams();

  const getPost = () => {
    fetch('https://renas-blog.herokuapp.com/writing/post/' + params.id)
      .then((res) => res.json())
      .then((res) => {
        setPost(res.postdetail);
        setComments(res.comments);
        setCommentCount(res.commentCount);
        setApiLoaded(true);
      })
  }

  const handleContent = (e) => {
    setContent(e.target.value)
  }

  const postComment = (e) => {
    const commentObj = {
      author: localStorage.jwtUserId,
      post: post._id,
      content: content,
      date: new Date()
    }
    axios.post('http://localhost:9000/protected/comment/create', commentObj)
    .then(res => {
      console.log(res);
      setSuccess(true);
      getPost();
    })
    .catch(err => {
      if (err.response) {
        if (err.response.status === 404) setError('Resource does not exist')
        else setError('Something went wrong, please try again')
      }
    })
  }

  console.log(success);

  useEffect(() => {
    setLink('writing');
    getPost();
  }, []);

  console.log(post);

  return (
    <section className="Post Gradient">
      <div className= "Main__Grid">
        <main className="Blog">
        <article className="Loading" style={{ display: apiLoaded ? 'none' : 'block'}}>
            <p>Sorry, looks like my API needs a a few extra seconds to wake up. Loading content now!</p>
          </article>
          <section className = "Post__Main" style={{ display: !apiLoaded ? 'none' : 'block'}} >
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
          <section className="Post__Comments" style={{ display: !apiLoaded ? 'none' : 'block'}}>
            <h4>Comments ({commentCount})</h4>
            {error}
            {localStorage.jwtToken === undefined && <section className="Form__Comment">
              <p>Sign in or create an account to post a comment</p>
              <p><Link to="/auth" >Sign in</Link></p>
            </section>}
            {localStorage.jwtToken === undefined ? null :
              <section className="Form__Comment">
                <form onSubmit={postComment}>
                  <p>Posting as: <b>{localStorage.jwtUsername}</b></p>
                  <textarea rows="5" placeholder="What are your thoughts?" onChange={handleContent}></textarea>
                  <button>Post comment</button>
                </form>
              </section>
            }
            {comments.map((item) => {
              return <article className="Comment">
                <div className="Comment__Metadata-Wrapper">
                  <p className="Comment__Metadata">From: {item.author.username}</p>
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