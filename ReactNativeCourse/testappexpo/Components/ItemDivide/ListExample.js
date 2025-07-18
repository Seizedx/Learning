import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Person from './Person';

export default class ListExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: '1', name: 'TestName1', age: '69', email: 'testEmail1@testEmail.com'},
                {id: '2', name: 'TestName2', age: '96', email: 'testEmail2@testEmail.com'},
                {id: '3', name: 'TestName3', age: '19', email: 'testEmail3@testEmail.com'},
                {id: '4', name: 'TestName4', age: '91', email: 'testEmail4@testEmail.com'},
                {id: '5', name: 'TestName5', age: '11', email: 'testEmail5@testEmail.com'},
                {id: '6', name: 'TestName6', age: '21', email: 'testEmail6@testEmail.com'},
                {id: '7', name: 'TestName7', age: '31', email: 'testEmail7@testEmail.com'},
                {id: '8', name: 'TestName8', age: '28', email: 'testEmail8@testEmail.com'},
                {id: '9', name: 'TestName9', age: '10', email: 'testEmail9@testEmail.com'},
                {id: '10', name: 'TestName10', age: '100', email: 'testEmail10@testEmail.com'},
                {id: '11', name: 'TestName11', age: '12', email: 'testEmail11@testEmail.com'},
                {id: '12', name: 'TestName12', age: '32', email: 'testEmail12@testEmail.com'},
                {id: '13', name: 'TestName13', age: '14', email: 'testEmail13@testEmail.com'},
                {id: '14', name: 'TestName14', age: '39', email: 'testEmail14@testEmail.com'},
                {id: '15', name: 'TestName15', age: '75', email: 'testEmail15@testEmail.com'},
                {id: '16', name: 'TestName16', age: '1', email: 'testEmail16@testEmail.com'},
                {id: '17', name: 'TestName17', age: '13', email: 'testEmail17@testEmail.com'},
                {id: '18', name: 'TestName18', age: '43', email: 'testEmail18@testEmail.com'},
                {id: '19', name: 'TestName19', age: '74', email: 'testEmail19@testEmail.com'},
                {id: '20', name: 'TestName20', age: '59', email: 'testEmail20@testEmail.com'},
            ]
        };
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Person data={item} /> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})