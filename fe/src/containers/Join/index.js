import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { joinRoom } from '../../sockets'




class Join extends Component {
  constructor(props){
    super(props)
  }

  onClick(){
    console.log('registered click on join button')
    joinRoom(this.refs.roomCode.value.toUpperCase())
  }

  render(){
    return(
      <div>
        <input type="text" ref="roomCode" />
        <button onClick={this.onClick.bind(this)}>
        Go
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join)