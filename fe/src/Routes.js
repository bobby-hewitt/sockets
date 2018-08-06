import React from 'react';
import { Route, Link } from 'react-router-dom'
// import Home from './containers/Home'
import Join from './containers/Join'
import About from './containers/About'
import SocketListener from './containers/SocketListener'


import styles from './App.css'

const Routes = () => (
  <div>
    
  <SocketListener />
    <main>
      
      <div className="container">
      
      <Route exact path="/about" component={About} />
       <Route exact path="/" component={Join} />
      </div>
    </main>
  </div>
)

export default Routes;
