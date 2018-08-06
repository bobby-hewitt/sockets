import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import io from 'socket.io-client';
import {subscribeToSocketEvents} from '../../sockets'


class SocketListener extends Component {
  constructor(props){
    super(props)
    
  }

  componentDidMount(){
     subscribeToSocketEvents((action, data) => {
        this.props[action](data)
     })
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketListener)