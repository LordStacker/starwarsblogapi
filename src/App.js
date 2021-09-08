import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Jumbotron from './components/Jumbotron';
import injectContext from './store/appContext';
import JumbotronPlanets from './components/JumbotronPlanets';

function App() {
  return (<Router>
    <Navbar />
    <Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detailplanet/:id" component={JumbotronPlanets}>
          <JumbotronPlanets />
        </Route>
        <Route render={() => <h1>Not found</h1>}></Route>
      </Switch>
    </Route>
  </Router>
  );
}

export default injectContext(App);
