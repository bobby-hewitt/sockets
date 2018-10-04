import React, { Component } from 'react'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SocketListener from '../SocketListener'
import Buzzer from '../../components/Buzzer'
import Waiting from '../../components/Waiting'
import Join from '../Join'

class Player extends Component {
	componentWillMount(){
		console.log('Player mounting')
	}
	render(){
		return(
			<div className="playerContainer">
				<SocketListener/>
				 <Route path="/player/join" component={Join} />
				 <Route path="/player/buzzer" component={Buzzer} />
				 <Route path="/player/waiting" component={Waiting} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	room: state.player.room
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)