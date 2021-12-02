import React from 'react';
import PropTypes from 'prop-types';
import styles from './Register.module.css';
import axios from 'axios';

const Register = () => {
  const [state, setState] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
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
    registerUser();
    // alert("Logged in");
  }

  function registerUser(){
    // console.log(JSON.stringify(state));
    axios.post('http://localhost:4040/register', state)
        .then(res => {
          // alert(response);
          console.log(res);
          setErrMsg("Registered!");
        }).catch(err => {
          if(err.response)
          {
            setErrMsg(err.response.data);
            console.log(err.response.data);
          }
        });
  }  

  return(
    <div className={styles.Register}>
      Register User
      <div className="register-container">
        {/* <form> */}
          <input type="text" name="first_name" placeholder="First Name" onChange={handleChange}></input>
          <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange}></input>
          <input type="text" name="email" placeholder="example@gmail.com" onChange={handleChange}></input>
          <input type="password" name="password" onChange={handleChange}></input>
          <button onClick={handleSubmit}>Submit</button>
        {/* </form> */}
      </div>
      <p>{errMsg}</p>
    </div>
  );

}


export default Register;
