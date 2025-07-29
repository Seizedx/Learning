import React, { Component } from 'react';
import {    Text,
            View,
            Image,
            StyleSheet,
            TouchableOpacity,
        } from 'react-native';

class Cronometer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'START',
            isRunning: false,
            buttonColor: '#ffffff',
            lastTime: null,
            displayLastTime: 'none',

        };
        this.timer = null;
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
    }

    start() {
        if(this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({
                botao: 'CONTINUE',
                buttonColor: '#0a7d08',
                isRunning: false,
            });
        } else {
            this.timer = setInterval( ()=> {
                this.setState({numero: this.state.numero + 0.1});
            }, 100);
            this.setState({
                botao: 'PAUSE',
                buttonColor: '#c70303',
                isRunning: true,
            });
        }
    }


    reset() {
        if(this.timer != null || this.state.isRunning === false) {
            this.setState({
                lastTime: this.state.numero.toFixed(1),
                displayLastTime: 'block',
                timer: null,
                numero: 0,
                botao: 'START',
                buttonColor: '#ffffff',
                isRunning: false,
            });
            clearInterval(this.timer);
            this.timer = null;
        }
    }       
    render() {
          const {
                  buttonColor,
                  displayLastTime
          } = this.state;

    return (
        <View style={styles.container}>

            <Text style={styles.cronometro}>CRONOMETER</Text>
            <Image
            source={require('../src/cronometro.png')}
            style={styles.imgCronometro}
            />
            <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

            <View style={styles.btnArea}>
                <TouchableOpacity style={[styles.btn, {backgroundColor: buttonColor}]} onPress={this.start}>
                    <Text style={styles.btnTexto}>{this.state.botao}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.reset}>
                    <Text style={styles.btnTexto}>CLEAR</Text>
                </TouchableOpacity>
            </View>
                <Text style={[styles.textLastTime, {display: displayLastTime}]}>Last Time: {this.state.lastTime}s</Text>

        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#444444',
    },
    cronometro: {
        marginTop: 60,
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',

    },
    imgCronometro: {
        marginTop: 30,
        alignItems: 'center',
        width: '90%',
        height: 430

    },
    timer: {
        marginTop: -260,
        color: '#ffffff',
        fontSize: 80,
        fontWeight: 'bold'
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 0,
    },
    btn: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: 100,
        height: 50,
        margin: 5,
        borderRadius: 20
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    textLastTime: {
        display: 'none',
        marginTop: 150,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});

export default Cronometer;