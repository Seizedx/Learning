import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
        feed: this.props.data,
    };
    this.showLikes = this.showLikes.bind(this);
    this.like = this.like.bind(this);
  }

    like() {
    let feed = this.state.feed;
    if(feed.liked === true) {
      this.setState({
        feed: {
          ...feed,
          liked: false,
          likes: feed.likes - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          liked: true,
          likes: feed.likes + 1
        },

      });
    }
  }
  
  showLikes(likes) {
    let feed = this.state.feed;
    if(feed.likes <= 0) {
      return;
    }
    return(
      <Text style={styles.textLikes}>
        {feed.likes} {feed.likes > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  render() {
    const likedImg = this.state.feed.liked
    ? require('../../src/img/likeada.png')
    : require('../../src/img/like.png')
    return (
      <View style={styles.feedArea}>
        <View style={styles.viewProfile}>
          <Image 
            source={{uri: this.state.feed.profilePic}}
            style={styles.profilePicture}
          />
        <Text style={styles.userName}>{this.state.feed.username}</Text>
        </View>
        <Image 
          resizeMode='cover'
          style={styles.pubImage}
          source={{uri: this.state.feed.imgPub}}
        />
        <View style={styles.likeArea}>
          <TouchableOpacity onPress={this.like}>
            <Image 
              source={likedImg}
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.send}
            style={styles.btnSend}
          >
            <Image 
              source={require('../../src/img/send.png')}
              style={styles.icons}
            />
          </TouchableOpacity>
        </View>

        {this.showLikes(this.state.feed.likes)}

        <View style={styles.footerView}>
          <Text style={styles.usernameText}>{this.state.feed.username}</Text>
          <Text style={styles.descriptionText}>{this.state.feed.description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  feedArea: {

  },
  userName: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
    paddingLeft: 10
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  pubImage: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  likeArea: {
    flexDirection: 'row',
    padding: 5,
  },
  btnSend: {
    paddingLeft: 5,
  },
  icons: {
    height: 33,
    width: 33,
    padding: 10,
    margin: 5,
  },
  footerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingLeft: 10,
  },
  descriptionText: {
    paddingLeft: 10,
    fontSize: 15,
    color: '#000000'
  },
  textLikes: {
    paddingLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',   
  },
});