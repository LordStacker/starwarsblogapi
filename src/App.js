import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Jumbotron from './components/Jumbotron';

function App() {
  return (<Router>
    <Navbar/>
    <Route>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/people/:id">
          <Jumbotron/>
        </Route>          
        <Route render={() => <h1>Not found</h1>}></Route>
      </Switch>
    </Route>
  </Router>
  );
}

export default App;
