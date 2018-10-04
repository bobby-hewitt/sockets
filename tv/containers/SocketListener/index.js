import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { setRoomCode } from '../../actions/roomCode'
import { addPlayer } from '../../actions/players'
import { subscribeToSocketEvents } from '../../sockets'



class SocketListener extends Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
     subscribeToSocketEvents((action, data) => {
        console.log(action)
        this.props[action](data)
     })
  }
  
  render(){
    return (
      <View />
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setRoomCode,
  addPlayer
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketListener)


