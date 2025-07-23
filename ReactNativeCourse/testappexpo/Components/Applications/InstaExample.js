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
          username: 'João Carlos',
          description: 'this dude sucks',
          profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
          imgPub: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzcrKDyYtbNfETgZvDiQMETIjZdFFNhBnq2VEEONGE_zmFj70y6lv2SlHsBvVe2g0UDQ&usqp=CAU",
          liked: false,
          likes: 29
        },
        {
          id: '2',
          username: 'João Pedro',
          description: 'this dude also sucks',
          profilePic: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
          imgPub: "https://media.istockphoto.com/id/465110510/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=Q0JW-T65F6m8JajMS4ZanlNQTNDA3LapQp_4xGqOFu4=",
          liked: false,
          likes: 18
        },
        {
          id: '3',
          username: 'Carlos João',
          description: 'this dude sucks the most',
          profilePic: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          imgPub: "https://t3.ftcdn.net/jpg/02/70/63/44/360_F_270634430_KAoZy2ROeYTiFAwuAKSKNbRN36Ddg1Qr.jpg",
          liked: false,
          likes: 10
        },
        {
          id: '4',
          username: 'Pedro João',
          description: 'this dude really sucks',
          profilePic: "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
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
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({item}) => <List data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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