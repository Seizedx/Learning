//npm install @react-native-async-storage/async-storage --save
import React, { useEffect, useState } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Keyboard,
} from 'react-native';
import { PickerItem } from './CurrencyConversionPicker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from './CurrencyConversionAPIBaseURL';
 

export default function CurrencyConversion() {
    // const [API, setAPI] = useState('');
    const [loading, setLoading] = useState(true);
    const [currency, setCurrency] = useState([]);
    const [currencySelected, setCurrencySelected] = useState(null);
    const [currencyValue, setCurrencyValue] = useState(null);
    const [currencyConvertedValue, setCurrencyConvertedValue] = useState(0);
    const [currencyBValue, setCurrencyBValue] = useState('');
 
    //chama quando componente é aberto, está com o asynsStorage
    useEffect(() => {
        async function loadCurrency() {
            const response = await API.get('all');
            let APICurrencyArray = [];
            Object.keys(response.data).map((key) => {
                APICurrencyArray.push({
                    key: key,
                    label: key,
                    value: key,
                });
            });
            setCurrency(APICurrencyArray);
            setCurrencySelected(APICurrencyArray[0].key);
            setInterval(() => {
              setLoading(false);
            }, 1000);
        }
        loadCurrency();
    }, []);
 
    async function convert() {
        if( currencyBValue === 0 ||
            currencyBValue ==='' ||
            currencySelected === null ||
            isNaN(currencyBValue)
        ) {
            Alert.alert('Invalid Values', 'Check values and try again.');
            setCurrencyConvertedValue(0);
            return;
        }
        const response = await API.get(`/all/${currencySelected}-BRL`);
        let result = Number(currencyBValue) * response.data[currencySelected].ask;
        setCurrencyConvertedValue(`${result.toLocaleString("pt-BR", {style: "currency", currency: "BRL" })}`);
        setCurrencyValue(response.data[currencySelected].ask);
        Keyboard.dismiss();
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
            <View style={styles.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.card}>
                        <Text style={styles.mainTitle}>Currency Converter</Text>
                    <View style={styles.currencyArea}>
                        <Text style={styles.titleCurrency}>Select Currency:</Text>
                        <PickerItem
                            currency={currency}
                            currencySelected={currencySelected}
                            onChange={(currency) => {
                                setCurrencySelected(currency);
                                setCurrencyConvertedValue(0);
                            }}
                            />
                    </View>
                        <View style={styles.textInputArea}>
                            <Text style={styles.titleInput}>Value to be Converted to Real(R$):</Text>
                            <TextInput
                                style={styles.textInput1}
                                placeholder='Input the Value to be Converted'
                                keyboardType='numeric'
                                value={currencyBValue}
                                onChangeText={(value) => {
                                    setCurrencyBValue(value);
                                    setCurrencyConvertedValue(0);
                                }}
                                />
                        </View>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={convert}
                        >
                            <Text style={styles.button1Text}>Convert</Text>
                        </TouchableOpacity>
                        {currencyConvertedValue !== 0 && 
                            (
                                <View style={styles.resultArea}>
                                    <Text style={styles.priceRightNow}>1.00{currencySelected} Right Now = {currencyValue}BRL</Text>
                                    <Text style={styles.convertionTitle}>Convertion:</Text>
                                    <Text style={styles.convertedValue}>{currencyBValue}{currencySelected}</Text>
                                    <Text style={styles.equalTo}> Is equal to:</Text>
                                    <Text style={styles.convertedValue}>{currencyConvertedValue}</Text>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    card: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        // transform: 'translate(0%, 40%)',
    },
    loadingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        transform: 'scale(5)',
    },
    mainTitle: {
        fontSize: 38,
        fontWeight: 800,
        color: '#ffffff',
        textShadowColor: '#ff0707',
        textShadowRadius: 10,
        textDecorationColor: '#0d3eb9',
        marginBottom: 40,
    },
    currencyArea: {
        backgroundColor: '#f9f9f9',
        width: '90%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 8,
        marginBottom: 1,
    },
    titleCurrency: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 500,
        paddingLeft: 10,
        paddingTop: 10,
    },
    titleInput: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 500,
        paddingLeft: 10,
        paddingTop: 10,
        marginBottom: 20,
    },
    textInputArea: {
        width: '90%',
        backgroundColor: '#f9f9f9',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    textInput1: {
        width: '90%',
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#00000035',
        borderRadius: 10,
        marginBottom: 20,
    },
    button1: {
        marginTop: 30,
        alignItems: 'center',
        width: '70%',
        backgroundColor: '#ff0004',
        borderRadius: 10,
        
    },
    button1Text: {
        fontSize: 20,
        color: '#ffffff',
        padding: 15,
    },
    resultArea: {
        marginTop: 30,
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        marginBottom: 50,
    },
    priceRightNow: {
        fontSize: 16,
    },
    convertionTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 700,
    },
    convertedValue: {
        marginTop: 5,
        fontSize: 25,
        color: '#00aa11',
    },
    equalTo: {
        marginTop: 20,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
});