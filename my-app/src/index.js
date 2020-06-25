import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import "semantic-ui-css/semantic.min.css";
const Root=()=>(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
     
    </Switch>
  </Router>

);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
