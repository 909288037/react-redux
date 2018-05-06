import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch, Link,Redirect} from 'react-router-dom'

// import {counter} from "./index.redux";
import reducer from './reducers.js'
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth.js';
import Dashboard from './Dashboard.js';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : F => F
))

// class Test extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     console.log(this.props.match.params.location);
//     return <h2>测试</h2>
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Auth}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Redirect to="/dashboard" component={Dashboard}/>
      </Switch>

    </Router>
  </Provider>
  , document.getElementById('root')
);


registerServiceWorker();
