import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Details(props) {
    return(
        <View style={styles.container}>
            <View style={styles.modal1Container}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={props.return}
                >
                    <Text style={styles.button2Text}>Voltar</Text>
                </TouchableOpacity>
            <Text style={styles.title2}>{props.movies.nome}</Text>
            <Text style={styles.text2}>Sinópse</Text>
            <Text style={styles.subtext2}>{props.movies.sinopse}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modal1Container: {
        height: height * 0.8,
        width: width * 0.9,
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    button2: {
        backgroundColor: '#e52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    button2Text: {
        color: '#ffffff',
        fontSize: 16,
    },
    title2: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        padding: 10,
    },
    text2: {
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10,
    },
    subtext2: {
        color: '#ffffff',
        marginLeft: 10,
        fontSize: 12,
        marginRight: 10,
    },
});