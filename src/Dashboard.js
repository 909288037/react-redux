import React from 'react'
import { Link,Route,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import App from './App';
import Erying from './Erying';
import {logout} from './Auth.redux'

@connect(
  state => state.auth,
  {logout}
)

// function Erying() {
//   return <h2>二营</h2>
//
// }
// function Qibinglian() {
//   return <h2>骑兵连</h2>
// }
class Dashboard extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const redirectToLogin = <Redirect to="/login"></Redirect>
    const app = (
      <div>
        <h1>独立团</h1>
        {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
        <ul>
          <li>
            <Link to="/dashboard">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Route exact path="/dashboard" component={App}/>
        <Route path="/dashboard/erying" component={Erying}/>
        {/*<Route path="/dashboard/qibinglian" component={Qibinglian}/>*/}
      </div>
    )
    return  this.props.isAuth ? app : redirectToLogin
  }
}
export default Dashboard