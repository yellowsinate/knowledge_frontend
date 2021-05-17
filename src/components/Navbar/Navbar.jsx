import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

class NavBar extends React.Component{
    constructor() {
        super();
        this.state = {
          isAuth: false
        };
      }
      componentDidMount() {
        if( localStorage.getItem('token') ) this.setState({ isAuth: true })
        else this.setState({ isAuth: false })
      }

render(){
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
            <div className={style.menuItem}>
                <NavLink to="/qanda" activeClassName={style.activeLink}>Q&A</NavLink>
            </div>
            <div className={style.menuItem}>
                <NavLink to="/information" activeClassName={style.activeLink}>Информация</NavLink>
            </div>
            <div className={style.menuItem}>
                 <NavLink to="/search" activeClassName={style.activeLink}>Поиск</NavLink>
            </div>
            <div className={style.menuItem}>
                <NavLink to="/tostaff" activeClassName={style.activeLink}>Сотрудником</NavLink>
            </div>
            <div className={style.menuItem}>
                <NavLink to="/contacts" activeClassName={style.activeLink}>Контакты</NavLink>
            </div>
            {this.state.isAuth && (<div className={style.menuItem}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Личный кабинет</NavLink>
            </div>)}

            {!this.state.isAuth && (<div className={style.menuItem}>
                <NavLink to="/login" activeClassName={style.activeLink}>Логин</NavLink>
            </div>)}
            
        </div>
    </nav>
    )
    

}

}
export default NavBar;