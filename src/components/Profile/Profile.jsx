import React from 'react';
import style from './Profile.module.css';
import axios from 'axios';

class Profile extends React.Component{
    constructor() {
        super();
        this.state = {
          isAuth: false,
          user_data: {}
        };
      }
      componentDidMount() {
        if( localStorage.getItem('token') ) {
            this.setState({ isAuth: true })
            axios.put(`http://185.18.4.100:8000/api/users/`, {token: 'JWT ' + localStorage.getItem('token')}, {headers: {
                "Content-Type": "application/json",
                Authorization: 'JWT ' + localStorage.getItem('token')
            }})
            .then(res => {
                this.setState({user_data: res.data})
            });
            
        }
        else this.setState({ isAuth: false })
      }

render(){
    return (
   <div>
       {this.state.user_data.first_name}
   </div>
    )
    
}
}
export default Profile;