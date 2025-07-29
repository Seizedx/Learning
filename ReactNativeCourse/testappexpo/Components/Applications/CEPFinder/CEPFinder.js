//npm install @react-native-async-storage/async-storage --save
import React, { useEffect, useState, useRef } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    Keyboard,
    Dimensions
} from 'react-native';
import { API } from './ViaCEPAPI';
const { width, height } = Dimensions.get('window');
 
export default function CEPFinder() {
    const [inputCEP, setInputCEP] = useState('');
    const [loading, setLoading] = useState(true);
    const textInputCEP = useRef(null);
    const [searchInfo, setSearchInfo] = useState(null);
    const [result, setResult] = useState('');

 
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

    async function search() {
        if( inputCEP === 0 ||
            inputCEP ==='' ||
            inputCEP === null
        ) {
            Alert.alert('Invalid CEP Number', 'Check number and try again.');
            return;
        } else {
            const clearCEP = inputCEP.replace(/\D/g, '');
            try{
                const response = await API.get(`/${clearCEP}/json/`);
                setSearchInfo(response.data);
                Keyboard.dismiss();
            }catch (error) {
                Alert.alert('Invalid CEP Number', 'Check number and try again.');
                return;
            }
        }
    }
 
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
                <ScrollView
                showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.mainView}>
                        <Text style={styles.mainTitle}>CEP Finder</Text>
                        <Text style={styles.mainSubtitle}>Which CEP are You Looking For?</Text>
                        <TextInput
                        ref={textInputCEP}
                        value={inputCEP}
                        style={styles.textInput1} 
                        placeholder='Input the CEP Number'
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        onChangeText={(text) => {
                            setInputCEP(text);
                            setResult('');
                            setSearchInfo(null);
                        }}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={styles.button1Area}
                            activeOpacity={0.7}
                            onPress={search}
                        >
                            <Text style={styles.buttonText}>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button2Area}
                            activeOpacity={0.7}
                            onPress={() => {
                                setInputCEP('');
                                setResult('');
                                setSearchInfo(null);
                                textInputCEP.current?.focus();
                            }}
                        >
                            <Text style={styles.buttonText}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                    {searchInfo &&
                        <View style={styles.resultArea}>
                            <Text style={styles.resultText}>CEP: {searchInfo.cep}</Text>
                            <Text style={styles.resultText}>Logradouro: {searchInfo.logradouro}</Text>
                            <Text style={styles.resultText}>Complemento: {searchInfo.complemento}</Text>
                            <Text style={styles.resultText}>Bairro: {searchInfo.bairro}</Text>
                            <Text style={styles.resultText}>Cidade: {searchInfo.localidade}</Text>
                            <Text style={styles.resultText}>Estado: {searchInfo.uf}</Text>
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>

        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        boxSizing: 'border-box',
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
        alignItems: 'center',
        width: width,

    },
    mainTitle: {
        marginTop: 50,
        fontSize: 66,
        fontWeight: 'bold',
        textShadowColor: '#d9ff03',
        textShadowRadius: 10,
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
        padding: 10,
        width: width * 0.9,
        borderWidth: 1,
        borderColor: '#ffffff4c',
        opacity: 1,
        borderRadius: 10,
    },
    buttonView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width * 0.9,
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
        alignItems: 'center',
        width: width * 0.9,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#ffffff',
    },
});