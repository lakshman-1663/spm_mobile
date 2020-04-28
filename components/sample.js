import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class sample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is sample js </Text>
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
export default sample;
