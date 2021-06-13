import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import QandA from './components/QandA/QandA';
import Main from './components/Main/Main';
import Information from './components/Information/Information';
import Search from './components/Search/Search';
import ToStaff from './components/ToStaff/ToStaff';
import Contacts from './components/Contacts/Contacts'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import InstructionsPage from './components/Instructions/instructions_page/instructions_page';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SearchTagPage from './components/SearchPage/SearchTagPage';
import SearchByTagAndModelPage from './components/SearchPage/SearchByTagAndModelPage';
import SearchPage from './components/SearchPage/SearchPage';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/qanda" component={QandA} />
              <Route path="/information" component={Information} />
              <Route path="/instructions/:page" component={InstructionsPage} />
              <Route path="/search/:search?" component={SearchPage} />
              <PrivateRoute path="/tostaff" component={ToStaff} />
              <Route path="/contacts" component={Contacts} />
              <Route exact path="/tags/search/:tag" render={(props) => <SearchTagPage {...props} />} />
              <Route exact path="/tags/search/:tag/:model/:page" render={(props) => <SearchByTagAndModelPage {...props} />} />
              {/* <Route path="/search_tag/:tag/:page" component={Contacts} /> */}
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </div>
          <ToastContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
