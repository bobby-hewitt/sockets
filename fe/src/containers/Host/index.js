import React, { Component } from 'react'
import './style.css'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SocketListener from '../SocketListener'
import PlayerCard from '../../components/PlayerCard'
import { startRound } from '../../sockets/host'
import { startRoundHost } from '../../actions/host'
// let slots = ['#f8b195','#f67280','#c06c84','#6c5b7b','#355c7d','#6c5b7b','#c06c84','#f67280']
let slots = ['#f8b195','#f67280','#c06c84','#f8b195','#f67280','#c06c84','#f8b195','#f67280']

class Host extends Component {


	componentWillMount(){
		console.log('host mounting')
	}

	componentDidMount(){
		//add event for keyPress
		document.addEventListener("keyup", (event)=>{
		  event.preventDefault();
		  if (event.keyCode === 13) {
		    this.startRound()
		  }
		});
	}


	startRound(){
		
		this.props.startRoundHost()
		startRound()
	}

	render(){
		return(
			<div className="hostContainer">
			<h1 className="pageTitle">BUZZER.LIVE</h1>
				<SocketListener isHost={true}/>
					
						
						<div className="mainContainer">
							<div className="mainContainerInner">
								{this.props.round === 0 && 
									<div className="introContainer">
										<h1>Room code: </h1>	
										<div className="roomCodeContainer">
											<h1>{this.props.roomCode}</h1>	
										</div>
										<p>Press ENTER to start</p>
									</div>
								}
								{this.props.round !== 0 && 
							
								<div className="introContainer">
									<div className="responsesContainer">
									{this.props.responses.map((p,i) => {
										return(
											<PlayerCard
												delay={i > 0 ? (p.time - this.props.responses[i - 1].time) / 1000 : null}
												index={i +1}
												isResponse={true}
												key={i}
												response={p}
											/>
										)
									})}
									</div>
								</div>
							
								}
							</div>
						</div>
						<div className="playersContainer">
						{slots.map((c,i) => {
							return(
								<PlayerCard
									color={c}
									player={this.props.players[i]}
									key={i}
									
								/>
							)
						})}
						</div>
					<div className="roundIndicator">
					Round {this.props.round}
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