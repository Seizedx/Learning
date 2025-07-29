//npm install @react-native-async-storage/async-storage --save
import React, { useEffect, useState } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    Dimensions,
    TouchableHighlight,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
 
 
export default function ChallengeApp3() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('');
    const [limit, setLimit] = useState(30);
 
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
                <View style={styles.titleCard}>
                    <Text style={styles.mainTitle}>Customer Counter</Text>
                    <Text style={styles.mainSubtitle}>How Many People are Inside the Restaurant?</Text>
                </View>
                <View style={styles.limitButtonArea}>
                    <TouchableHighlight
                        style={styles.limitButton}
                        activeOpacity={0.7}
                        underlayColor={color}
                        onPress={() => {
                                setColor('#fff70049');
                                setLimit(prevLimit => prevLimit + 1);
                            }
                        }
                        onLongPress={() => {
                                if(limit >= 2) {
                                    setColor('#ff4d0049');
                                    setLimit(prevLimit => prevLimit - 1);
                                } else {
                                    Alert.alert("You Can't do That", "Limit Cannot be Less than 1");
                                }
                            }
                        }
                    >
                        <Text style={styles.text}>⚙️</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.counterArea}>
                    <Text style={styles.textCounter}>{counter}</Text>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableHighlight
                        style={styles.button1}
                        underlayColor={'#09ff00'}
                        activeOpacity={0.5}
                        onPress={() => {
                            if (counter === limit) {
                                Alert.alert("You Can't do That", "There's no Tables Empty");
                            } else {
                                setCounter(prevCounter => prevCounter + 1);
                            }
                        }}
                    >
                        <Text style={styles.text}>+</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button1}
                        underlayColor="#bd2323"
                        activeOpacity={0.5}
                        onPress={() => {
                                if(counter >= 1) {
                                    setCounter(prevCounter => prevCounter - 1);
                                } else {
                                    Alert.alert("You Can't do That", "There's Nobody Here");
                                }
                            }}
                    >
                        <Text style={styles.text}>-</Text>
                    </TouchableHighlight>
                </View>
                    <Text style={[styles.mainSubtitle, {marginTop: 10, color: '#ff6f00'}]}>Limit: {limit}</Text>
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
    titleCard: {
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: 60,
        textShadowColor: '#0c8896',
        textShadowRadius: 50,
        marginBottom: 20,
        textAlign: 'center',
    },
    mainSubtitle: {
        fontSize: 25,
        textAlign: 'center',
        width: width * 0.8,
        marginBottom: 30,
    },
    limitButtonArea: {
        position: 'absolute',
        marginTop: height * - 0.4,
        marginLeft: width * 0.75,
    },
    limitButton: {
        fontSize: 20,
        borderRadius: 100,
    },
    counterArea: {
        backgroundColor: '#000000',
        width: width * 0.5,
        alignItems: 'center',
        borderRadius: 20,
    },
    textCounter: {
        fontSize: 95,
        color: '#ffffff',
        textAlign: 'center',
    },
    buttonArea: {
        marginTop: 30,
        flexDirection: 'row',
        gap: 25,
    },
    button1: {
        backgroundColor: '#021703',
        padding: 5,
        borderRadius: 10,
        width: 90,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 40,
    },
});