import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'; 
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

const App = () => {
  return (
      <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/" component={Main} />
          <Route path="/qanda" component={QandA}/>
          <Route path="/information" component={Information} />
          <Route path="/search" component={Search} />
          <Route path="/tostaff" component={ToStaff} />
          <Route path="/contacts" component={Contacts}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
