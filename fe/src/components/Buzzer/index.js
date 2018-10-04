import React, { Component } from 'react'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { buzz } from '../../sockets/player'

class Buzzer extends Component {

	onClick(){
		console.log('buzzer', this)
		buzz(this)
	}

	render(){
		return(
			<div className="buzzerContainer" onClick={this.onClick.bind(this)}>
				BUZZ
			</div>
		)
	}
}

const mapStateToProps = state => ({
	room: state.player.room,
	self: state.player.self,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //declare the change page function in mapDispatchToProps
  push: (path) => push('/' + path)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buzzer)