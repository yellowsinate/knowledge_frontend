import React from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux' 
 
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isAuth: !!this.token && !this.loading,
      username: '',
      password: '',
      user_data: {},
      redirectToLogin: false
    };
  }

 
  loginUser = (event) => {
    event.preventDefault()
    axios
    .post(
      'http://185.18.4.100:8000/token-auth/',
      {
        username: this.username,
        password: this.password
      }
    )
    .then( res => {
      if (res.status === 200) {
        this.props.login(res.data.token)
      }
    })
  }

  onInput = (e) => {
    this.[e.target.name] = e.target.value;
  }

  componentDidMount() {
    this.loading = false
  }
 
  render(){
    if (!this.props.token)
      return (
        <div>
            <form onSubmit={this.loginUser}>
            <label>
              Name:
              <input
                type="text"
                name="username"
                onInput={this.onInput}
              />
            </label>
  
            <label>
              PASSWORD
              <input
                type="password"
                name="password"
                onInput={this.onInput}
              />
            </label>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    else 
        return <Redirect push to="/profile"/>
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch({type: 'LOGIN', payload})
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login)