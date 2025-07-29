import React, { Component } from 'react'
import { 
 Text,
 View,
 TouchableOpacity,
 StyleSheet,
 Image,
} from 'react-native'

export default class ChallengeApp2Modal extends Component {

  render() {
    return (
            <View style={styles.modal1View}>
                <Image
                    style={styles.logoImg}
                    source={require('../../src/img2/gas.png')}
                />
                <Text style={styles.modal1Title}>{this.props.result} is the best option</Text>
                <Text style={styles.modal1Subtitle}>With the Prices:</Text>
                <Text style={styles.modal1Subtext}>Alcohol: ${this.props.alcohol}</Text>
                <Text style={styles.modal1Subtext}>Gas: ${this.props.gas}</Text>
                <TouchableOpacity
                    style={styles.button1Modal}
                    onPress={this.props.close}
                >
                    <Text style={styles.button1ModalText}>Calculate Again</Text> 
                </TouchableOpacity>
            </View>
    )
  }
}

const styles = StyleSheet.create({
  modal1View: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  logoImg: {
    marginTop: 50,
    width: 200,
    height: 200,
  },
  modal1Title: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    color: '#3dd66e',
  },
  modal1Subtitle: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    color: '#ffffff',
    marginBottom: 10,
  },
    modal1Subtext: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
  button1Modal: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    paddingRight: 50,
    paddingLeft: 50,
    borderColor: '#ff893f',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  button1ModalText: {
    color: '#ff893f',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  
  },
});
