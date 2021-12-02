import React from 'react';
import PropTypes from 'prop-types';
import styles from './Posts.module.css';
import axios from 'axios';

const Posts = () => {

  const [postData, setPostData] = React.useState([]);

  function getPosts()
  {
    axios.get('http://localhost:4040/posts/getPosts')
        .then(res => {
          // alert(response);
          console.log(res);
          setPostData(()=>{
            return res.data.map((post, index) => {
                return (
                  <div className="post-item" key={index}>
                    <p>{post.title}</p>
                    <textarea defaultValue={post.body}></textarea>
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
    // const postItems = data.map((film, index) => {
    //   return (
    //     <div className="carousel-item" key={index}>
    //     <img
    //       tabIndex="1"
    //       onClick={() => props.updateHero(film)}
    //       src={film.poster_path}
    //       ></img>
    //   </div>
    //   );
    // });
  }


  return (
    <div className={styles.Posts}>
    Posts Component
    <button onClick={getPosts}>Get Posts</button>
    {postData}
    </div>
  );
}

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
