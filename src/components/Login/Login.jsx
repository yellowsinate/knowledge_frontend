import React from 'react'
import axios from 'axios'
 
 
class Login extends React.Component {
 
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(this.inputNode.value)
 
 
    console.log('get token')
    axios
    .post(
      'http://185.18.4.100:8000/token-auth/',
      {
        username: event.target.username.value,
        password: event.target.password.value
      }
    )
    .then( res => {
      if (res.status === 200) localStorage.setItem('token', res.data.token)
      this.setState({ isAuth: true })
    })
  }
 
  // isAuth = ()=> {
  //   if (this.isAuth)
  // }
 
 
  render(){
    return (
      <div>
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
 
      {/* {this.state.isAuth && (<div>isAuth</div>)}
      {!this.state.isAuth && (<div>noAuth</div>)} */}
 
      </div>
    )
  }
}
 
export default Login