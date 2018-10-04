import React, { Component } from 'react'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SocketListener from '../SocketListener'
import PlayerCard from '../../components/PlayerCard'
import { startRound } from '../../sockets/host'
import { startRoundHost } from '../../actions/host'

class Host extends Component {
	componentWillMount(){
		console.log('host mounting')
	}


	startRound(){
		
		this.props.startRoundHost()
		startRound()
	}

	render(){
		return(
			<div className="hostContainer">
				<SocketListener isHost={true}/>
					<h1>{this.props.roomCode}</h1>	
						<div className="playersContainer">
						{this.props.players.map((p,i) => {
							return(
								<PlayerCard 
									key={i}
									player={p}
								/>
							)
						})}
						</div>
						<div className="responsesContainer">
						{this.props.responses.map((p,i) => {
							return(
								<PlayerCard 
									key={i}
									player={p}
								/>
							)
						})}
						</div>
					<div className="roundIndicator">
					Round {this.props.round}
					</div>
					<div className="button" onClick={this.startRound.bind(this)}>
						Next round
					</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
  count: state.counter.count,
  round: state.host.round,
  roomCode: state.host.roomCode,
  players: state.host.players,
  responses: state.host.responses
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //declare the change page function in mapDispatchToProps
  startRoundHost,
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Host)