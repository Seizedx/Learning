import React, { Component } from 'react'
import { 
 Text,
 Dimensions,
 StyleSheet,
 View,
 TextInput,
 Image,
 Modal,
 TouchableOpacity,
 ScrollView,
 Alert
} from 'react-native'

import ChallengeApp2Modal from './ChallengeApp2Modal'

const { width, height } = Dimensions.get('window');

export default class ChallengeApp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        alcohol: 0.00,
        gas: 0.00,
        result: 'None',
        resultVisible: false
    };
    this.inputAlcohol = React.createRef();
    this.inputGas = React.createRef();
    this.alcoholPrice = this.alcoholPrice.bind(this)
    this.gasPrice = this.gasPrice.bind(this)
    this.closeResult = this.closeResult.bind(this)
    this.result = this.result.bind(this)
    }

    alcoholPrice(number) {
        this.setState({ alcohol: number });
    }

    gasPrice(number) {
        this.setState({ gas: number });
    }

    closeResult() {
        this.setState({
            resultVisible: false
        });
    }
    result() {
        const {alcohol, gas} = this.state;
        const result = this.state.alcohol / this.state.gas;
        if(result <= 0.7) {
            this.setState({
                resultVisible: true,
                result: 'Alcohol'
            });
        }
        else if (
            isNaN(alcohol) ||
            isNaN(gas) ||
            alcohol <= 0 ||
            gas <= 0
        ) {
            Alert.alert('Invalid Values', 'Check values and try again.');
            return;
        } else {
                this.setState({
                resultVisible: true,
                result: 'Gas'
            });
        }
    }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        >
        <Image
            style={styles.logoImg}
            source={require('../../src/img2/logo.png')}
        />
        <Text style={styles.titleText}>What is the best option?</Text>
        <View style={styles.textInputView}>
            <Text style={styles.subtitleText}>Alcohol(Price per Liter):</Text>
            <TextInput
                ref={this.inputAlcohol}
                value={this.state.alcohol}
                style={styles.textInput} 
                placeholder='Alcohol Price($)'
                underlineColorAndroid='transparent'
                onChangeText={this.alcoholPrice}
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => this.inputGas.current?.focus()}
            />
            <Text style={styles.subtitleText}>Gas(Price per Liter):</Text>
            <TextInput
                ref={this.inputGas}
                value={this.state.gas}
                style={styles.textInput} 
                placeholder='Gas Price($)'
                underlineColorAndroid='transparent'
                onChangeText={this.gasPrice}
                keyboardType="numeric"
                returnKeyType="done"
            />

        </View>
        <TouchableOpacity
            style={styles.calculateButtonArea}
            activeOpacity={0.7}
            onPress={this.result}
            disabled={false}
            accessibilityLabel="Custom Button"
        >
            <Text style={styles.calculateBtnText}>Calculate</Text>
        </TouchableOpacity>

        <Modal
            animationType="fade" //ou slide
            visible={this.state.resultVisible}
            // transparent={true} //backgroundColor Sobrepoe
            hardwareAccelerated={true}
            statusBarTranslucent={false}
            >
            <ChallengeApp2Modal
                close={this.closeResult}
                alcohol={this.state.alcohol}      
                gas={this.state.gas}      
                result={this.state.result}      
            />
        </Modal>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#141414',
},
logoImg: {
    alignSelf: 'center',
    marginTop: 50,
    width: 200,
    height: 200,
},
titleText: {
    marginTop: 50,
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 500,
},
textInputView: {
  marginTop: 50,  
},
subtitleText: {
    marginLeft: 10,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 500,
},
textInput: {
    width: width * 0.85,
    margin: 10,
    backgroundColor: '#ffffff',
    fontSize: 20,
    paddingLeft: 10,
  },
  calculateButtonArea: {
    marginTop: 20,
    width: width * 0.85,
    textAlign: 'center',
    backgroundColor: '#ff893f',

    padding: 10,
    borderRadius: 10,
  },
  calculateBtnText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center'
  }
});