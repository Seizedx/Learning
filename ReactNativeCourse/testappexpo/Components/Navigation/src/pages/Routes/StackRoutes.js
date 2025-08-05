import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from '../ResourceStackAndTabs/HomePageStackAndTabs';
import Details from '../ResourceStackAndTabs/DetailsStackAndTabs';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
    <Stack.Navigator
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        />
        <Stack.Screen
            name="Details"
            component={Details}
        />
    </Stack.Navigator>
    )
}