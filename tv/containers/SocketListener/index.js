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
import { subscribeToSocketEvents } from '../../sockets'



class SocketListener extends Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
     subscribeToSocketEvents((action, data) => {
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
  setRoomCode
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketListener)


