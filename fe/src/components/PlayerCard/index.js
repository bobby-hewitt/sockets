import React, { Component } from 'react';
import './style.css'


export default class PlayerCard extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="playerCardContainer" style={{background:this.props.color}}>
          {this.props.isResponse &&
            <div className="playerCardContainer response" >
              <h3>{`#${this.props.index}: ${this.props.response.player.name}`}</h3>
              <h4 className="secondary">{`${this.props.delay ? '+' + (Math.round(this.props.delay * 100) / 100) + ' seconds' : ''}`}</h4>
            </div>
          }
          {this.props.player && !this.props.isResponse &&
            <div>
              <h3>{this.props.player.name}</h3>
            </div>
          }
          {!this.props.player && !this.props.isResponse &&
            <div className="">
              <h3>Login to play</h3>
            </div>
          }
      </div>
    )
  }
} 


