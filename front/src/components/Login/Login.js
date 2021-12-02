import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import axios from 'axios';

const Login = () => {

  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const [errMsg, setErrMsg] = React.useState([""]);
  
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function handleSubmit() {
    loginUser();
    // alert("Logged in");
  }

  function loginUser(){
    // console.log(JSON.stringify(state));
    axios.post('http://localhost:4040/login', state)
        .then(res => {
          // alert(response);
          console.log(res);
          setErrMsg("Logged In!");
        }).catch(err => {
          if(err.response)
          {
            setErrMsg(err.response.data);
            console.log(err.response.data);
          }
        });
  }  

  return(
    <div className={styles.Login}>
      Login Component
      <div className="login-container Form">
        {/* <form> */}
          <input type="text" name="email" placeholder="example@gmail.com" onChange={handleChange}></input>
          <input type="password" name="password" onChange={handleChange}></input>
        {/* </form> */}
      </div>
          <button onClick={handleSubmit}>Submit</button>
      <p>{errMsg}</p>
    </div>
  );
}

export default Login;
