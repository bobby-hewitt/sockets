import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { joinRoom } from '../../sockets'




class Waiting extends Component {
  constructor(props){
    super(props)
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
  //declare the change page function in mapDispatchToProps
  changePage: () => push('/about')
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Waiting)