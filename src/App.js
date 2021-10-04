import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import store from './store';
import List from './List';
import Course from './Course';

function App() {
  console.log(store)
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/list">List</Link>
          </li> */}
          <li>
            <Link to="/courses">List</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <body>
        <Switch>
          <Route path ="/about" component={About}></Route>
          <Route path ="/courses" component={List}></Route>
          {/* <Route path ="/courses" component={Course}></Route> */}
          <Route path ="/" component={Home}></Route>
        </Switch>
      </body>
    </BrowserRouter>
  );
}

export default App;
