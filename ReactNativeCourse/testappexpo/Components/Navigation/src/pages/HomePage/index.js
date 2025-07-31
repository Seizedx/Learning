import React, { useEffect, useState } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    Button,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';         //////////////////////////////
 
 
export default function HomePage() {
    const navigation = useNavigation();
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.mainTitle}>Home Screen</Text>
                    <Text style={styles.mainSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, itaque, ab nobis sunt cumque cupiditate blanditiis, nam voluptatum corporis error tempora at provident aspernatur accusamus minima maiores eveniet saepe quis!</Text>
                </View>
                <Button
                    title="About" onPress={() => {
                        navigation.navigate('About');
                    }}
                />
            </View>
        )
    }
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    mainTitle: {
        fontSize: 50,
        textAlign: 'center',
    },
    mainSubtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
    }
});