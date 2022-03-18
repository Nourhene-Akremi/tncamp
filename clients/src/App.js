import './style/App.scss';
import {Switch,Route} from 'react-router-dom'
import Home from './commponents/home'
import MyNavBar from './commponents/navbar'
import Profile from './commponents/profile'
import Login from './commponents/logIn'
import Signup from './commponents/signup'
import Footer from './commponents/footer'
function App() {
  return (
    <div className="App">

    <MyNavBar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/Login" component={Login}/>
       <Route path="/Signup" component={Signup}/>
       <Route path="/Profile" component={Profile}/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
