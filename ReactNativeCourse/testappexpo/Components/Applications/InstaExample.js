import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native'
import List from '../../src/List';

export default class InstaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'João Carlos',
          description: 'this dude sucks',
          perfilImg: "https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg/",
          imgPub: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzcrKDyYtbNfETgZvDiQMETIjZdFFNhBnq2VEEONGE_zmFj70y6lv2SlHsBvVe2g0UDQ&usqp=CAU",
          liked: false,
          likes: 0
        },
        {
          id: '2',
          nome: 'João Pedro',
          description: 'this dude also sucks',
          perfilImg: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
          imgPub: "https://media.istockphoto.com/id/465110510/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=Q0JW-T65F6m8JajMS4ZanlNQTNDA3LapQp_4xGqOFu4=",
          liked: false,
          likes: 0
        },
        {
          id: '3',
          nome: 'Carlos João',
          description: 'this dude sucks the most',
          perfilImg: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          imgPub: "https://t3.ftcdn.net/jpg/02/70/63/44/360_F_270634430_KAoZy2ROeYTiFAwuAKSKNbRN36Ddg1Qr.jpg",
          liked: false,
          likes: 0
        },
        {
          id: '4',
          nome: 'Pedro João',
          description: 'this dude really sucks',
          perfilImg: "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
          imgPub: "https://thumbs.dreamstime.com/b/ocean-horizon-vertical-15318274.jpg",
          liked: false,
          likes: 0
        },
        
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('../../src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.feed}
          renderItem={(item) => <List data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  header: {
    height: 55,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    borderBottomWidth: 0.2,
    shadowColor: '#000000',
    elevation: 1,
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23,
  },
});