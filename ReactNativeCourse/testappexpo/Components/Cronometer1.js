import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

class Cronometer extends Component {
constructor(props) {
    super(props);
    this.state = {
    number: '00:00:00:000',
    stateButton: 'Start',
    lastTime: null,
    elapsedTime: 0,
    isRunning: false,
    startButtonShadow: 'rgba(83, 199, 93, 0.58)',
    startButtonBackground: 'rgb(5, 52, 28)',
    startButtonBorder: 'rgba(62, 169, 62, 0.2)'
    };
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
  }

start() {
  if (this.state.isRunning) {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ stateButton: 'Continue',
                    isRunning: false,
                    startButtonShadow: 'rgba(83, 199, 93, 0.58)',
                    startButtonBackground: 'rgb(5, 52, 28)',
                    startButtonBorder: 'rgba(62, 169, 62, 0.2)'});
  } else {
    const startTime = new Date().getTime() - this.state.elapsedTime;
    this.timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const totalElapsed = currentTime - startTime;
      const elapsedTimeSeconds = totalElapsed / 1000;
      const hours = Math.floor(elapsedTimeSeconds / 3600);
      const minutes = Math.floor((elapsedTimeSeconds % 3600) / 60);
      const seconds = Math.floor(elapsedTimeSeconds % 60);
      const milliseconds = Math.floor((totalElapsed % 1000));

      this.setState({
        number: `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds
          .toString()
          .padStart(3, '0')}`,
        elapsedTime: totalElapsed,
        stateButton: 'Pause',
        startButtonShadow: 'rgba(199, 83, 83, 0.58)',
        startButtonBackground: 'rgb(52, 5, 5)',
        startButtonBorder: 'rgba(169, 62, 62, 0.2)',
        isRunning: true
      });
    }, 10);
  }
}


reset() {
    clearInterval(this.timer);
    this.timer = null;
    if (this.state.number !== '00:00:00:000') {
    this.setState({ lastTime: this.state.number });
    }
    this.setState({
    number: '00:00:00:000',
    stateButton: 'Start',
    startButtonShadow: 'rgba(83, 199, 93, 0.58)',
    startButtonBackground: 'rgb(5, 52, 28)',
    startButtonBorder: 'rgba(62, 169, 62, 0.2)',
    elapsedTime: 0,
    isRunning: false,
    });
}

  render() {
const { startButtonBorder, startButtonBackground, startButtonShadow } = this.state;

    const startButtonStyle = {
      height: 70,
      width: 120,
      borderWidth: 2,
      borderColor: startButtonBorder,
      borderRadius: 35,
      backgroundColor: startButtonBackground,
      alignContent: 'center',
      justifyContent: 'center',
      shadowColor: startButtonShadow,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5,
    };

    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>CRONOMETER</Text>
        <Image source={require('../src/cronometro.png')} style={styles.cronometerImg} />
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{this.state.number}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={startButtonStyle} onPress={this.start}>
            <Text style={styles.buttonText}>{this.state.stateButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={this.reset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastTimeArea}>
          <Text style={styles.lastTimeText}>
            {this.state.lastTime ? `Last Time: ${this.state.lastTime}` : ''}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.563)',
  },

  timerContainer: {
    marginTop: -250,
    backgroundColor: '#ffffff67',
    borderWidth: 2,
    borderColor: '#ffffff60',
    borderRadius: 30,
    height: 70,
    width: 290,
    justifyContent: 'center',
    alignItems: 'center',
  },

  timerText: {
    fontSize: 38,
    color: 'rgba(6, 122, 43, 1)',
  },

  textTitle: {
    marginTop: 70,
    fontStyle: 'italic',
    fontFamily: 'arial, sans-serif',
    fontWeight: '700',
    color: '#ffffff',
    fontSize: 45,
  },

  cronometerImg: {
    marginTop: 50,
    height: 450,
    width: 380,
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 23,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '500',
    color: '#b4e6bd',
  },

  resetButton: {
    height: 70,
    width: 90,
    borderWidth: 2,
    borderColor: 'rgba(62, 169, 62, 0.2)',
    borderRadius: 35,
    backgroundColor: 'rgb(5, 52, 28)',
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(83, 199, 93, 0.58)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },

  lastTimeArea: {
    marginTop: 110,
},

lastTimeText: {
    color: '#0a1f0c',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center'
  }

});

export default Cronometer;