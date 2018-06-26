import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addToCount,
  subtractFromCount
} from '../../actions/counter'

import io from 'socket.io-client';



class Home extends Component {
  constructor(props){
    super(props)
    this.socket = io('http://localhost:9000')
  }

  componentWillMount(){
    this.socket.emit('test', 'hi there')
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
  addToCount,
  subtractFromCount,
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)