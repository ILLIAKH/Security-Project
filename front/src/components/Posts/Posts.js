import React from 'react';
import PropTypes from 'prop-types';
import styles from './Posts.module.css';
import axios from 'axios';
// Library to sanitize dom
import DOMPurify from 'dompurify';

const Posts = () => {

  const [postData, setPostData] = React.useState([]);

  const [postPayload, setPostPayload] = React.useState({
    title: "",
    description: "",
    body: "",
  });

  function createPost()
  {
    axios.post('http://localhost:4040/posts/createPost', postPayload)
        .then(res => {
          console.log(res);
          // setErrMsg("Post Created!");
          getPosts();
        }).catch(err => {
          if(err.response)
          {
            // setErrMsg(err.response.data);
            console.log(err.response.data);
          }
        });
  }

  React.useEffect(() => {
    getPosts();
    // console.log("mounted");
  },[]);

  function getPosts()
  {
    axios.get('http://localhost:4040/posts/getPosts')
        .then(res => {
          // alert(response);
          // console.log(res);
          setPostData(()=>{
            return res.data.map((post, index) => {
              const sanitizedBody = DOMPurify.sanitize(post.body);
                return (
                  <div className={styles.postItem} key={index}>
                    <p>{post.title}</p>
                    {/* Unsanitized */}
                    <div dangerouslySetInnerHTML={{__html: post.body}}/>
                    {/* Sanitized Post Body */}
                    {/* <div dangerouslySetInnerHTML={{__html: sanitizedBody}}/> */}
                  </div>
                );
            })
          });
        }).catch(err => {
          if(err.response)
          {
            // setErrMsg(err.response.data);
            console.log(err.response.data);
          }
        });
  }
  
  function handleChange(evt) {
    const value = evt.target.value;
    setPostPayload({
      ...postPayload,
      [evt.target.name]: value
    });
  }

  return (
    <div className={styles.Posts}>
    <h1>XSS Exmaple</h1>
    <hr></hr>
    <h3>Create Post</h3>
    <div className="Form">
      <input type="text" name="title" placeholder="Title" onChange={handleChange}></input>
      <input type="text" name="description" placeholder="description" onChange={handleChange}></input>
      <textarea type="text" name="body" placeholder="Post Body" onChange={handleChange} rows="4" cols="50"></textarea>
    </div>
      <button onClick={createPost}>Submit</button>
      <hr></hr>
    <h3>Post Data</h3>
    {/* <button onClick={getPosts}>Get Posts</button> */}
    {postData}
    </div>
  );
}

export default Posts;
