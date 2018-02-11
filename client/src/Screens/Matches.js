import React from 'react';
import { Button, Icon } from 'react-native-elements';
import {
  View,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
  Image,
  Easing,
  TouchableHighlight,
  Modal,
} from 'react-native';

class Matches extends React.Component {
  static navigationOptions = {
    title: 'New Peers',
    headerLeft: <Button title="Back" onPress={() => StackNavigator({ screen: 'Home' })} />
  }

  render() {
    return (
      <View>
        <Text>Matchecs</Text>
      </View>
    )
  }
}
export default Matches;
