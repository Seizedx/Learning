import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { 
    DrawerContentScrollView,
    DrawerItemList,
 } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome</Text>
                <Image 
                    source={require('./src/img/perfil.png')}
                    style={styles.image}
                />
            </View>
            <DrawerItemList {...props}/> {/* Esse chama o os itens que ja foram desenhados no drawer */}
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 30,
    },
    image: {
        width: 200,
        height: 200,
    }
});