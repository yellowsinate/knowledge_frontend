import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import { authUser } from "../../store/actions/user";

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
    this.props.authUser({
      username: this.username,
      password: this.password
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
    authUser: (payload) => dispatch(authUser(payload))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login)