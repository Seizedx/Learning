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

export default function ConsumeFirestoreDatabase() {
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

            //maneira 2 atualiza a qualquer momento
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


//Módulo Principal:

// firestore(): Inicializa a instância do Firestore (ex.: import firestore from '@react-native-firebase/firestore').

//Métodos de Coleção e Documento:

// collection(path): Acessa uma coleção pelo caminho (ex.: firestore().collection('users')).
// doc(path): Acessa um documento pelo caminho (ex.: firestore().collection('users').doc('userId')).
// collectionGroup(id): Consulta documentos em todas as coleções com o mesmo ID (ex.: firestore().collectionGroup('posts')).

//Métodos de Escrita:

// set(data, options): Define os dados de um documento, sobrescreve tudo (ex.: docRef.set({ name: 'John' })).
// update(data): Atualiza campos específicos de um documento (ex.: docRef.update({ age: 30 })).
// add(data): Adiciona um novo documento a uma coleção com ID automático (ex.: collectionRef.add({ title: 'Post' })).
// delete(): Remove um documento (ex.: docRef.delete()).
// batch(): Cria um lote para operações em massa (ex.: firestore().batch()).
// batch.set(docRef, data, options): Define dados em um documento no lote.
// batch.update(docRef, data): Atualiza dados em um documento no lote.
// batch.delete(docRef): Remove um documento no lote.
// batch.commit(): Executa todas as operações do lote.

//Métodos de Leitura:

// get(options): Recupera os dados de um documento ou coleção (ex.: docRef.get() ou collectionRef.get()).
// onSnapshot(callback, errorCallback): Escuta mudanças em tempo real em um documento ou coleção.

//Métodos de Consulta (Query):

// where(field, op, value): Filtra documentos (ex.: collectionRef.where('age', '>=', 18)).
// orderBy(field, direction): Ordena resultados (ex.: collectionRef.orderBy('createdAt', 'desc')).
// limit(limit): Limita o número de resultados (ex.: collectionRef.limit(10)).
// startAt(value): Inicia a consulta em um valor (ex.: collectionRef.startAt(100)).
// startAfter(value): Inicia após um valor (ex.: collectionRef.startAfter(100)).
// endAt(value): Termina em um valor (ex.: collectionRef.endAt(200)).
// endBefore(value): Termina antes de um valor (ex.: collectionRef.endBefore(200)).

//Métodos de Configuração e Utilitários:

// settings(options): Configura o Firestore (ex.: { cacheSizeBytes: 104857600 }).
// clearPersistence(): Limpa o cache local do Firestore (ex.: firestore().clearPersistence()).
// enablePersistence(options): Ativa o modo offline (ex.: firestore().enablePersistence()).
// disableNetwork(): Desativa a rede, força uso do cache offline.
// enableNetwork(): Reativa a rede.
// terminate(): Encerra a instância do Firestore.
// waitForPendingWrites(): Aguarda todas as escritas pendentes serem confirmadas.

// Propriedades de Resultados (ex.: get(), onSnapshot())

// docs: Array de documentos retornados em uma consulta (ex.: querySnapshot.docs).
// data(): Retorna os dados de um documento (ex.: docSnapshot.data()).
// id: ID do documento (ex.: docSnapshot.id).
// exists: Booleano indicando se o documento existe (ex.: docSnapshot.exists).
// metadata: Metadados do snapshot (ex.: snapshot.metadata.fromCache).