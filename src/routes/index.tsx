import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from '../pages/home'
import Detail from '../pages/detail'
import { propsNavigationStack } from "./models/models.routes";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>
                <Screen name="Home" component={Home}></Screen>
                <Screen name="Detail" component={Detail }></Screen>
            </Navigator>
        </NavigationContainer>
    )
} 