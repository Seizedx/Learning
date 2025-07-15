import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Person extends Component {
    render() {
        return (
            <View style={styles.textArea}>
                <View style={styles.bar}></View>
                <Text style={styles.text}> Name: {this.props.data.name}</Text>
                <Text style={styles.text}> Age: {this.props.data.age}</Text>
                <Text style={styles.text}> Email: {this.props.data.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textArea: {
        backgroundColor: 'grey',
    },
    bar: {
        height: 20,
        backgroundColor: 'green'
    },
    text: {
        fontSize: 20,
    },
});