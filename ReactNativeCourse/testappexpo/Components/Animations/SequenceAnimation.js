//npm install @react-native-async-storage/async-storage --save
import React, { useEffect, useState, useRef } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    Animated,
 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function SequenceAnimation() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const animatedWidth = useRef(new Animated.Value(150)).current;
    const animatedHeight = useRef(new Animated.Value(150)).current;
    const animatedOpacity = useRef(new Animated.Value(1)).current;

    //Em sequência
    useEffect(()=> {
        Animated.sequence([
            Animated.timing(animatedWidth, {
                toValue: 300,
                duration: 2000,
                useNativeDriver: false,
            }),
            Animated.timing(animatedHeight, {
                toValue: 300,
                duration: 2000,
                useNativeDriver: false,
            }),
            Animated.timing(animatedOpacity, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false,
            }),
        ]).start();

    }, []);

    //chama quando componente é aberto, está com o asynsStorage
    useEffect(() => {
        async function getStorage() {
            const storedName = await AsyncStorage.getItem('names');
            if(storedName !== null) {
                setName(storedName);
            }
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
            <View style={styles.container}>
                <View>
                    <Animated.View style={[styles.animationView, {width: animatedWidth, height: animatedHeight, opacity: animatedOpacity}]}>
                        <Text style={styles.textAnimation}>Carregando...</Text>
                    </Animated.View>
                </View>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        transform: 'scale(5)',
    },
    animationView: {
        justifyContent: 'center',
        backgroundColor: '#de0e0e',
    },
    textAnimation: {
        textAlign: 'center',
        fontSize: 22,
        color: '#ffffff',
    }
 
});