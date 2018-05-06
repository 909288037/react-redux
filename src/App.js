import React from 'react';
import {connect} from 'react-redux'
import {addGun, removeGun,addGunAsync} from "./index.redux";

// const mapStatetoProps = (state) => {
//   return  {num:state}
// }
// const actionCreators = {addGun, removeGun,addGunAsync}

// App = connect(mapStatetoProps,actionCreators)(App)
@connect(
  //  要的属性
  state => ({num: state.counter}),
  //  要的方法
  {addGun,removeGun,addGunAsync}
)
class App extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      console.log(this.props);
      return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天给</button>
            </div>
        );
    }
}

export default App;
