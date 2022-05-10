
import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Header from '../components/header';
import { Character } from '../models/character.model';
import { Route } from '../models/route.model';


function Detail () {

    const params: Route = useRoute();
    const char: Character = params.params.char ? params.params.char : {} as Character

    return (
        <>
            <Header title={char.name}></Header>
            <View>
                <Image style={styles.avatar} source={{ uri: char.image }}></Image>
                <Text>{char.name}</Text>
            </View>
        </>
    )
}

export default Detail;

const styles = StyleSheet.create({
    avatar: {
        width: '100%',
        height: 300,
    }
});
