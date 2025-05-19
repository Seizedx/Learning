import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    text1: {
      fontSize:20,
      color:'red',
      fontWeight:'800'
    },
    text2: {
      fontSize:30,
      color:'green',
      fontWeight:'700'
    },
    text3: {
      fontSize:10,
      color:'blue',
      fontWeight:'600'
    },
    text4: {
      fontSize: 13,
      color:'rgb(241, 70, 70)',
      fontWeight:'500'
    },
    centerText: {
      textAlign:'center'
    }
})

class StyleSheetUsage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>This is Text 1</Text>
            <Text style={[styles.text2, styles.centerText]}>This is Text 2</Text>
            <Text style={[styles.text3, styles.centerText]}>This is Text 3</Text>
            <Text style={[styles.text4, styles.centerText]}>This is Text 4</Text>

        </View>
    )
  }
}

export default StyleSheetUsage;
