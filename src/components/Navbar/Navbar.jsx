import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
import { connect } from 'react-redux'
import { getUserIsStaffFromToken } from '../../store/actions/user'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: this.props.token,
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

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <nav className={style.navWrapper}>
                <div className={style.logoWrapper}>
                    <NavLink to="/">
                        <img src="https://yt3.ggpht.com/a/AATXAJzXUnPe_Hiw0Tw9i-_bYMSqiBIPYo_gtQYFtQS8hA=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
                    </NavLink>
                </div>
                <div className={style.menuWrapper}>
                    <div className={style.menuItem}>
                        <NavLink to="/">Главная</NavLink>
                    </div>
                    <div className={style.menuItem} key="1">
                        <NavLink to="/qanda" activeClassName={style.activeLink}>Q&A</NavLink>
                    </div>
                    <div className={style.menuItem} key="2">
                        <NavLink to="/information" activeClassName={style.activeLink}>Информация</NavLink>
                    </div>
                    <div className={style.menuItem} key="3">
                        <NavLink to="/search" activeClassName={style.activeLink}>Поиск</NavLink>
                    </div>
                    {
                        !this.state.loading && this.state.isStaff && this.props.token
                            ? <div className={style.menuItem} key="4">
                                <NavLink to="/tostaff" activeClassName={style.activeLink}>Сотрудникам</NavLink>
                            </div>
                            : null
                    }

                    <div className={style.menuItem} key="5">
                        <NavLink to="/contacts" activeClassName={style.activeLink}>Контакты</NavLink>
                    </div>
                    {
                        this.props.token
                            ? <>
                                <div className={style.menuItem} key="6">
                                    <NavLink to="/profile" activeClassName={style.activeLink}>Личный кабинет</NavLink>
                                </div>
                                <div className={style.menuItem} key="7">
                                    <NavLink to="/logout" activeClassName={style.activeLink} onClick={this.logout}>Выход</NavLink>
                                </div>
                            </>
                            : <div className={style.menuItem} key="8">
                                <NavLink to="/login" activeClassName={style.activeLink}>Логин</NavLink>
                            </div>
                    }
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.user.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch({ type: 'LOGOUT' }),
        getUserIsStaffFromToken: (payload) => dispatch(getUserIsStaffFromToken(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);