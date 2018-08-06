import {
  createStackNavigator,
} from 'react-navigation';
import Home from './containers/Home'
import RoomCode from './containers/RoomCode'

const Navigator = createStackNavigator({
  RoomCode: { screen: RoomCode },
  Home: { screen: Home },
  
});

export default Navigator;