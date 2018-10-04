import React, { Component } from 'react';
import './style.css'


export default class PlayerCard extends Component {
  render(){
    return(
      <div>
      <div className="playerCardContainer">
        <h3>{this.props.player.name}</h3>
      </div>
  </div>
    )
  }
} 


