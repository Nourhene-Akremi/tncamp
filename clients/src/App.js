import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './commponents/home'
import MyNavBar from './commponents/navbar'
import Profile from './commponents/profile'
import Events from './commponents/events'
import Login from './commponents/logIn'
function App() {
  return (
    <div className="App">

    <MyNavBar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/Login" component={Login}/>
       <Route path="/Profile" component={Profile}/>
       <Route path="/Events" component={Events}/>
     </Switch>
    </div>
  );
}

export default App;
