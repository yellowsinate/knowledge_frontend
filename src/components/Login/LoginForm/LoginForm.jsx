import React from 'react';
import style from './Login.module.css';
import axios from 'axios';

class Login extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(event.target.username.value)
      console.log(this.inputNode.value)

      function getToken() 
      {
          console.log('get token')
          return axios.post(`http://185.18.4.100:8000/token-auth/`, {'username': event.target.username.value, 'password': event.target.password.value})
          .then(res => {
            console.log(res);
            console.log('JWT ' + res.data.token);
            if (res.status === 200)
                localStorage.setItem('token', 'JWT ' + res.data.token);

      })}

      getToken()
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
            PASSWORD
            <input
              type="password"
              name="password"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )
    }
  }



export default Login;