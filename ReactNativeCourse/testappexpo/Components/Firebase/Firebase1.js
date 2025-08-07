//Verificar primeira aula do curso pra entender como criar projeto
//npm install firebase

//https://docs.expo.dev/guides/using-firebase/
//npx expo install firebase
//https://console.firebase.google.com/u/0/

//tem que alterar o metro.config.js

//npx expo customize metro.config.js

//agora alterar o arquivo

// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);
// config.resolver.sourceExts.push('cjs');
// config.resolver.unstable_enablePackageExports = false;

// module.exports = config;


import React, { useEffect, useState } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    
} from 'react-native';

import { db } from './src/firebaseConfig'; // importa o db do firebase
import { doc, getDoc, onSnapshot } from 'firebase/firestore'; 

export default function Firebase1() {
    const [dogName, setDogName] = useState('');
    const [ estimatedAge, setEstimatedAge] = useState('');
    const [race, setRace] = useState('');

    useEffect(()=> {
        async function getData() {

            // //maneira 1 somente quando atualizar a aplicação
            // const docref = doc(db, "users", "1");
            // getDoc(docref)
            // .then((snapshot) => {
            //     setDogName(snapshot.data()?.dogName);
            //     setEstimatedAge(snapshot.data()?.estimatedAge); // o ? faz com que nao gere erro e volte vazio
            //     setRace(snapshot.data()?.race); //caso nao possua dados
            // })
            // .catch((error) => {
            //     console.log('Error: ');
            //     console.log(error);
            // })

            //maneira 2 atualiza diretamente
            onSnapshot(doc(db, "users", "1"), (doc) => {
                setDogName(doc.data()?.dogName);
                setEstimatedAge(doc.data()?.estimatedAge); // o ? faz com que nao gere erro e volte vazio
                setRace(doc.data()?.race); //caso nao possua dados
            })
        }
        getData();
    }, [])

        return (
            <View style={styles.container}>
                    <Text style={styles.mainTitleText}>TESTING FIREBASE</Text>
                <View style={styles.view1}>
                    <Text style={styles.subtitle}>Dog Name: </Text>
                    <Text style={styles.text}>{dogName}</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.subtitle}>Age: </Text>
                    <Text style={styles.text}>{estimatedAge}</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.subtitle}>Race: </Text>
                    <Text style={styles.text}>{race}</Text>
                </View>
            </View>
        )
    }
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    mainTitleText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#292929',
        textShadowColor: '#df3e3e',
        textShadowOffset: 10,
        textShadowRadius: 8,
        marginBottom: 20,
    }, 
    view1: {
        flexDirection: 'row',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#121212',
    },
    text: {
        marginTop: 10,
        fontSize: 20,
        color: '#4d4d4d',
    }
});