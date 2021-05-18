import React from 'react'
import { Redirect } from 'react-router'

class Logout extends React.Component {
    render() {
        return <Redirect push to="/login"/>
    }
}
export default Logout