import React from 'react';
import PropTypes from 'prop-types';
import styles from './Injection.module.css';
import axios from 'axios';

const Injection = () => {

  const [state, setState] = React.useState({
    email: "",
  });

  const [errMsg, setErrMsg] = React.useState([""]);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function getOneUser(){
    console.log(JSON.stringify(state));
    axios.post('http://localhost:4040/users/find', state)
        .then(res => {
          // alert(response);
          console.log(res);
          setErrMsg(res.data.map((el, idx)=><p key={idx}>{el.email}</p>));
        }).catch(err => {
          if(err.response)
          {
            console.log(err.response.data);
          }
        });
  }

  function handleSubmit() {
    getOneUser();
    // alert("Logged in");
  }
  return (
    <div className={styles.Injection}>
      Injection Component
      <p>{"{$gt:0}"} - will output all users in the db</p>
      <hr></hr>
          <input type="text" name="email" placeholder="example@gmail.com" onChange={handleChange}></input>
          {/* </form> */}
          <button onClick={handleSubmit}>Submit</button>
          <div>{errMsg}</div>
    </div>
  )
};

export default Injection;
