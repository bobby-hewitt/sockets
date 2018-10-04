import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
// import Home from './containers/Home'
import Join from './containers/Join'
import About from './containers/About'
import SocketListener from './containers/SocketListener'
import Waiting from './containers/Waiting'
import Host from './containers/Host'
import Player from './containers/Player'


import styles from './App.css'

class Routes extends Component {

  componentWillMount(){
    console.log('rendering routes')
  }
  render(){
    return(
      <div>
        <main>
          
          <div className="container">

          <Route exact path="/waiting" component={Waiting} />
          <Route exact path="/about" component={About} />
          <Route path="/player" component={Player} />
          <Route path="/host" component={Host} />
          </div>
        </main>
      </div>
    )
  }
}
  

export default Routes;
