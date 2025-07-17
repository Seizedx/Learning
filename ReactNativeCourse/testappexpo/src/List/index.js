import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
        feed: this.props.data
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Test Text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
});