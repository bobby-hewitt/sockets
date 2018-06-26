import React, { Component } from 'react';
import TVEventHandler from 'TVEventHandler';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import {
  addToCount,
  subtractFromCount
} from '../../actions/counter'

// const Home = props => (
// 	<View style={styles.container}>
// 		<Text style={styles.text}>
// 			{props.count}
// 		</Text>
// 		<TouchableWithoutFeedback onPress={props.addToCount}>
// 			<View>
// 				<Text style={styles.text}>
// 					ADD TO COUNT
// 				</Text>
// 			</View>
// 		</TouchableWithoutFeedback>
// 		<TouchableWithoutFeedback onPress={props.subtractFromCount}>
// 			<View>
// 				<Text style={styles.text}>
// 					SUBTRACT FROM COUNT
// 				</Text>
// 			</View>
// 		</TouchableWithoutFeedback>
// 	</View>
// )




 class Home extends Component{

 	constructor(props){
 		super(props)
 		window.navigator.userAgent = 'ReactNative';
	    const io = require('socket.io-client');
	    const socket = io('http://localhost:9000', {
	      transports: ['websocket'] // you need to explicitly tell it to use websockets
	    });
	    socket.on('connect', () => {
	      console.log('connected!');
	    });
 		this.state = {
 			x: 1
 		}
 	}

	  _tvEventHandler: any;

	  _enableTVEventHandler() {
	    this._tvEventHandler = new TVEventHandler();
	    this._tvEventHandler.enable(this, function(cmp, evt) {
	      if (evt && evt.eventType === 'right') {
	        
	      } else if(evt && evt.eventType === 'up') {
	       
	      } else if(evt && evt.eventType === 'left') {
	        
	      } else if(evt && evt.eventType === 'down') {
	        
	      } else if(evt && evt.eventType === 'playPause') {
	       
	      }
	    });
	  }

	  _disableTVEventHandler() {
	    if (this._tvEventHandler) {
	      this._tvEventHandler.disable();
	      delete this._tvEventHandler;
	    }
	  }

	  componentDidMount() {
	    this._enableTVEventHandler();
	  }

	  componentWillUnmount() {
	    this._disableTVEventHandler();
	  }

	  intoFocus(index){
	  	console.log('in', index)
	  }

	  outOfFocus(index){
		console.log('out', index)
	  }

	  onPress(){

	  }



	  render(){
	  	return(
	  		<View>
	  		<TouchableHighlight hasTVPreferredFocus={true}>
		  		<View 
		  			style={styles.box} 
		  			touchableHandleActivePressIn={this.intoFocus.bind(this, 1)}
		  			touchableHandleActivePressOut={this.outOfFocus.bind(this, 1)}>
		  			<Text style={styles.text}>1</Text>
		  		</View>
	  		</TouchableHighlight>
	  		<TouchableHighlight>
		  		<View 
		  			style={styles.box}
		  			touchableHandleActivePressIn={this.intoFocus.bind(this, 2)}
		  			touchableHandleActivePressOut={this.outOfFocus.bind(this, 2)}>
		  			<Text style={styles.text}>2</Text>
		  		</View>
	  		</TouchableHighlight>
	  		<TouchableHighlight>
		  		<View 
		  			style={styles.box}
		  			touchableHandleActivePressIn={this.intoFocus.bind(this, 3)}
		  			touchableHandleActivePressOut={this.outOfFocus.bind(this, 3)}>
		  			<Text style={styles.text}>3</Text>
		  		</View>
	  		</TouchableHighlight>
	  		</View>
	  	)
	  }
}




const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCount,
  subtractFromCount,
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
  }
});
