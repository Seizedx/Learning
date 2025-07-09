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

            buttonColor: '#ffffff',

        };
        this.timer = null;
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
    }

    start() {
        if(this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({botao: 'CONTINUE', buttonColor: '#0a7d08'});
        } else {
            this.timer = setInterval( ()=> {
                this.setState({numero: this.state.numero + 0.1});
            }, 100);
            this.setState({botao: 'PAUSE', buttonColor: '#c70303'});
        }
    }


    reset() {

    }
    
    render() {
          const {
                  buttonColor,
          } = this.state;

    return (
        <View style={styles.container}>

            <Image
            source={require('../src/cronometro.png')}
            style={styles.cronometro}
            />
            <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

            <View style={styles.btnArea}>
                <TouchableOpacity style={[styles.btn, {backgroundColor: buttonColor}]} onPress={this.start}>
                    <Text style={styles.btnTexto}>{this.state.botao}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.reset}>
                    <Text style={styles.btnTexto}>LIMPAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#444444',
    },
    cronometro: {

    },
    timer: {
        marginTop: -160,
        color: '#ffffff',
        fontSize: 65,
        fontWeight: 'bold'
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 70,
    },
    btn: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 40,
        margin: 17,
        borderRadius: 9
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    }
});

export default Cronometer;