import React, { Component } from 'react'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SocketListener from '../SocketListener'
import Buzzer from '../../components/Buzzer'
import Join from '../Join'

class Player extends Component {
	componentWillMount(){
		console.log('Player mounting')
	}
	render(){
		return(
			<div>
				<SocketListener/>
				 <Route path="/player/join" component={Join} />
				 <Route path="/player/buzzer" component={Buzzer} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
  count: state.counter.count,
  roomCode: state.host.roomCode,
  players: state.host.players
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)