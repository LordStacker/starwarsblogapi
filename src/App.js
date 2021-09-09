import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Jumbotron from './components/Jumbotron';
import injectContext from './store/appContext';
import JumbotronPlanets from './components/JumbotronPlanets';
import JumbotronVehicles from './components/JumbotronVehicles';

function App() {
  return (<Router>
    <Navbar />
    <Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/planet/:id" component={JumbotronPlanets}>
          <JumbotronPlanets />
        </Route>
        <Route path="/detail/character/:id" component={Jumbotron}>
          <Jumbotron />
        </Route>
        <Route path="/detail/vehicle/:id" component={JumbotronVehicles}>
          <JumbotronVehicles />
        </Route>
        <Route render={() => <h1>Not found</h1>}></Route>
      </Switch>
    </Route>
  </Router>
  );
}

export default injectContext(App);
