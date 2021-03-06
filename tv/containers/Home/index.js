import React, { Component } from 'react';
import TVEventHandler from 'TVEventHandler';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button
} from 'react-native';



 class Home extends Component{

 	constructor(props){
 		super(props)
 		window.navigator.userAgent = 'ReactNative';
	  
 		this.state = {
 			x: 1
 		}
 	}





 render() {
   
    return (
      <Button
        title="Go to Jane's profile"
        onPress={this.onPress.bind(this)}
      />
    );
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
)(Home)

const styles = StyleSheet.create({
  box:{
  	flex:1,
  	height:200,
  	width:200,
  	margin:10,
  },
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  text:{
  	fontSize:50,
  	color:'#101010'
  }
});
