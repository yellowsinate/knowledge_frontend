import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { getUserIsStaffFromToken } from '../../store/actions/user'

class PrivateRoute extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isStaff: false,
            loading: true
        }
    }

    componentWillMount() {
        this.getUserRole();
    }

    componentWillReceiveProps() {
        this.getUserRole();
    }

    getUserRole = () => {
        let isStaff = this.props.getUserIsStaffFromToken(this.props.token);
        this.state.isStaff = isStaff;
        this.state.loading = false;
    }

    render() {
        if (!this.state.loading) {
            if (this.state.isStaff && this.props.token)
                return <Route path={this.props.to} component={this.props.component}/>
            else 
                return <Redirect to="/"/>
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token || null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserIsStaffFromToken: (payload) => dispatch(getUserIsStaffFromToken(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)