import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { joinRoom } from '../../sockets/player'
import { setSelf } from '../../actions/player'
import './style.css'



class Join extends Component {
  constructor(props){
    super(props)
  }

  onClick(){
    console.log('registered click on join button')
    let obj = {
      name: this.refs.name.value.toUpperCase(),
      room: this.refs.roomCode.value.toUpperCase()
    }
    joinRoom(obj, this)
  }

  render(){
    return(
      <div className="playerInnerContainer">
      <div className="joinContanier">
        <div>
        <input placeholder="name"type="name" ref="name" />
        </div>
        <div>
        <input placeholder="room code"type="text" ref="roomCode" />
        </div>
        <div>
        <button onClick={this.onClick.bind(this)}>
        Go
        </button>
        </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //declare the change page function in mapDispatchToProps
  setSelf,
  changePage: () => push('/about')
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join)