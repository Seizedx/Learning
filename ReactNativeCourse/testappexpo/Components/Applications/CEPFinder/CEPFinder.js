//npm install @react-native-async-storage/async-storage --save
import React, { useEffect, useState, useRef } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    SafeAreaView,
    TextInput,
    TouchableOpacity,

} from 'react-native';
import { API } from './ViaCEPAPI';
 
 
export default function CEPFinder() {
    const [inputCEP, setInputCEP] = useState('');
    const [loading, setLoading] = useState(true);
    const textInputCEP = useRef(null);

 
    //chama quando componente é aberto, está com o asynsStorage
    useEffect(() => {
        async function getStorage() {
            setInterval(() => {
              setLoading(false);
            }, 1000);
        }
        getStorage();
        // return() => {} //Funciona como um ComponentWillUnmount
    }, []);
 
    if(loading) {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator
                    color='#121212'
                    size={'large'}
                    style={styles.loading}
                />
            </View>
        )
    } else {  
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                    <Text style={styles.mainTitle}>CEP Finder</Text>
                    <Text style={styles.mainSubtitle}>Which CEP are You Looking For?</Text>
                    <TextInput
                    ref={textInputCEP}
                    value={inputCEP}
                    style={styles.textInput1} 
                    placeholder='Input the CEP Number'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => setInputCEP(text)}
                    />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button1Area}
                    activeOpacity={0.7}
                    onPress={() => console.log('Button Pressed')}
                >
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2Area}
                    activeOpacity={0.7}
                    onPress={() => {
                        setInputCEP('');
                        textInputCEP.current?.focus();
                    }}
                >
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.resultArea}>
                <Text style={styles.resultText}>CEP: ----------</Text>
                <Text style={styles.resultText}>Logradouro: ----------</Text>
                <Text style={styles.resultText}>Bairro: ----------</Text>
                <Text style={styles.resultText}>Cidade: ----------</Text>
                <Text style={styles.resultText}>Estado: ----------</Text>

            </View>
            </SafeAreaView>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    loadingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        transform: 'scale(5)',
    },
    mainView: {
        width: '100%',
        alignItems: 'center',

    },
    mainTitle: {
        marginTop: 50,
        fontSize: 45,
        fontWeight: 'bold',
        textShadowColor: '#F4F455',
    },
    mainSubtitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 500,
    },
    textInput1: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        padding: 5,
        width: '90%',
    },
    buttonView: {
        marginTop: 20,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button1Area: {
        padding: 15,
        backgroundColor: '#0026ff',
        width:130,
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',

    },
    button2Area: {
        padding: 15,
        backgroundColor: '#ff5100',
        width:130,
        borderRadius: 10,
    },
    resultArea: {
        marginTop: 100,
        width: '80%',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#ffffff',
    },

});