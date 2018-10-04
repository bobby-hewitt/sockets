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


 class PlayerList extends Component{

 	constructor(props){
 		super(props)
 		this.state = {

 		}
 	}

	render(){
	  	return(
	  		<View >
	  			{console.log(this.props.players)}
	  			{this.props.players && this.props.players.map((p,i) => {
	  				return(
	  					<View key={i}>
	  						<Text>{p.name}</Text>
	  					</View>
	  				)
	  			})}
	  		</View>	
	  	)
	}
}




const mapStateToProps = state => ({
	players: state.players.players
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

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
