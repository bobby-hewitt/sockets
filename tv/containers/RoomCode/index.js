import React, { Component } from 'react';
import TVEventHandler from 'TVEventHandler';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';


 class RoomCode extends Component{

 	constructor(props){
 		super(props)
 		this.state = {

 		}
 	}

 	componentWillMount(){
 		console.log('mounting room code')
 	}

 	componentWillReceiveProps(np){
 		console.log(np)
	}





	  render(){
	  	return(
	  		<View style={styles.container}>
	  			<Text style={styles.text}>RoomCode{this.props.roomCode}</Text>	
	  		</View>
	  		
	  		
	  		)
	  }
}




const mapStateToProps = state => ({
  count: state.counter.count,
  roomCode: state.roomCode.roomCode
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomCode)

const styles = StyleSheet.create({
  container: {
    height:1080,
    width:1920,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text:{
  	color:'#101010',
  	fontSize:20,
  }
});
