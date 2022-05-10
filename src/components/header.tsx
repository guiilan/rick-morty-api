import React from "react";
import { Appbar } from 'react-native-paper';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../routes/models/models.routes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Route } from "../models/route.model";

function Header (props: { title: string }) {

    const navigation = useNavigation<propsStack>();
    const params: Route = useRoute();

    return (
        <Appbar style={style.appbar}>
            {
                params.name === 'Home' ?  <View><Text></Text></View> :
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Text style={style.icon}>{'<'}</Text>
                    </TouchableOpacity>
            }
            <Text style={style.textAppbar}>{props.title}</Text>
            <View><Text></Text></View>
        </Appbar>
    )
}

export default Header;

const style = StyleSheet.create({
    icon: {
        marginTop: 20,
        fontWeight: 'bold'
    },
    appbar: {
        height: 90,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgb(85, 204, 68)',

    },
    textAppbar: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '400'
    }
})



