import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './styles.css'




class Home extends Component {

  render(){
    return(
      <div className="homeContainer">
        <div className="hostButton homeButton" onClick={this.props.push.bind(this, 'host')}>
          Host
        </div>
        <div className="playerButton homeButton" onClick={this.props.push.bind(this, 'player/join')}>
          Player
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({

  //declare the change page function in mapDispatchToProps
  push: (path) => push('/' + path)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)