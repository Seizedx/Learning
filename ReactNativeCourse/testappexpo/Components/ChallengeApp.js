import React, { Component } from 'react'
import {  Text,
          StyleSheet,
          View,
          TextInput,
          Switch,
          TouchableOpacity,
          Alert
        } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default class ChallengeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      age: null,
      sex: 0,
      sexes: [
        {key: 1, name: "i'd rather not inform"},
        {key: 2, name: 'Male'},
        {key: 3, name: 'Female'},
      ],
      limitValue: 0,
      student: false,

    }
    this.nameInput = React.createRef();
    this.ageInput = React.createRef();
    this.limitInput = React.createRef();
    this.nameCatch = this.nameCatch.bind(this);
    this.ageCatch = this.ageCatch.bind(this);
  }
    
    nameCatch(text) {
      this.setState({ name: text });
  }
    ageCatch(number) {
      this.setState({ age: number });
  }
  limitCatch(text) {
    const numericValue = parseFloat(text);
    this.setState({ limitValue: isNaN(numericValue) ? 0 : numericValue });
  }
  openAccount() {             ////////////////////////////////////////
    if( this.name === '' ||
        this.name === isNaN
    )
    Alert.alert('Account Register Information:', 'test' )
  }

  render() {
    let sexesItem = this.state.sexes.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.name} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.initialText}>
          <Text style={styles.title}>RN BANK</Text>
          <Text style={styles.subTitle}>Customer Registration:</Text>
        </View>
        <View style={styles.dialogue}>
          <Text style={styles.subText}>Name:</Text>
          <TextInput
            ref={this.nameInput}
            style={styles.textInput} 
            placeholder='Type Your Name'
            underlineColorAndroid='transparent'
            onChangeText={this.nameCatch}
            keyboardType="text"
            returnKeyType="next"
            onSubmitEditing={() => this.ageInput.current?.focus()}
          ></TextInput>

          <Text style={styles.subText}>Age:</Text>
          <TextInput
            ref={this.ageInput}
            style={styles.textInput} 
            placeholder='Type Your Age'
            underlineColorAndroid='transparent'
            onChangeText={this.ageCatch}
            keyboardType="numeric"
            returnKeyType="done"
          ></TextInput>
        </View>
          <Text style={styles.subText}>Sex:</Text>
        <View style={styles.picker1}>
          <Picker
            style={styles.pickerSex}
            selectedValue={this.state.sex}
            onValueChange={(itemValue) => this.setState({ sex: itemValue })}
          >
            {sexesItem}
          </Picker>          
        </View>
          <Text style={styles.subText}>Desired Limit:</Text>

          <Text style={styles.subText}>${this.state.limitValue.toFixed(2)}</Text>
        <View style={styles.limitSlider}>
          <Slider 
            style={styles.slider1}
            minimumValue={0}
            maximumValue={100000}
            step={0} //decimal 0 inteiro 1
            onValueChange={(selectedValue) => this.setState({limitValue: selectedValue})}
            value={this.state.limitValue}
            minimumTrackTintColor='#424242'
            maximumTrackTintColor='#ffffff'
            thumbTintColor='#596f46'
          />
        </View>
        <View style={styles.student}>
          <Text style={styles.subText}>Are You a Student? </Text>
          <Switch 
            style={styles.switch1}
            trackColor={{ false: '#767577', true: '#fff59c' }}
            thumbColor={(this.state.student) ? '#f5dd4b' : '#3c3c3c'}
            value={this.state.student}
            onValueChange={(valueSwitch) => this.setState({student: valueSwitch})}
          />
        </View>
            <View style={styles.button1}>
            <TouchableOpacity
              style={styles.openAccountBtn}
              activeOpacity={0.5}
              onPress={this.openAccount}
              disabled={false}
              accessibilityLabel="Open Account Button"
            >
              <Text style={styles.openAccountBtnText}>Open Account</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aeaeae',
    marginTop:35,
  },
  initialText: {
    width: '100%'
  },
  title: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
    subText: {
    marginTop: 10,
    fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'center',
  },
  textInput: {
    textAlign: 'center',
    color: 'black',
    boxShadow: '0px 0px 10px 10px rgba(86, 86, 86, 0.185)',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    padding: 10,
  },
  picker1: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 30,

  },
  pickerSex: {
    transform: 'scale(1.2)',
  },
  limitSlider: {
    alignItems: 'center'
  },
  slider1: {
    width: '35%',
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
    transform: 'scale(3)'
  },
  student: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    justifyContent: 'center'
  },
  switch1: {
    transform: 'scale(2)'
  },
  button1: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    alignItems: 'center',
  },
  openAccountBtn: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,

  },
  openAccountBtnText: {
    fontSize: 20,
    fontWeight: '600'
  },

})
