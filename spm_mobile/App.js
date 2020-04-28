import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to SPM_Mobile App </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 22,
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default App;
