
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
} from 'react-native';
import Card from '../components/card';
import Header from '../components/header';
import { Character } from '../models/character.model';
import service from '../service/services'


function Home() {

    const [char, setChar] = useState<Character[]>([]);

    useEffect(() => {getAllCharacter()}, [])

    async function getAllCharacter() {
        console.log('chamou')
        const fullChar = await service.fetch('character')
        setChar(fullChar)
    }

    return (
        <>
            <Header title="Rick and Morty"></Header>
            <SafeAreaView style={style.body}>
                <FlatList
                    data={char}
                    renderItem={({ item }) => (
                        <>
                            <Card char={item}></Card>
                        </>
                    )}
                ></FlatList>
            </SafeAreaView>
        </>

    );
}


export default Home;

const style = StyleSheet.create({
    appbar: {
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(85, 204, 68)'
    },
    textAppbar: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '400'
    },
    body: {
        backgroundColor: 'rgb(36, 40, 47)',
        flex: 1
    }
})

