
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Character } from '../models/character.model';
import { propsStack } from '../routes/models/models.routes';


function Card (props : {char: Character}) {

    const navigation = useNavigation<propsStack>();


    function returnColorPerson(specie: string): string {
        switch (specie) {
            case 'Alive':
                return 'rgb(85, 204, 68)'
            case 'Dead':
                return 'rgb(214, 61, 46)'
            default: return 'rgb(158, 158, 158)'
        }
    }

    function getTextName(name: string): string {
        return name.length <= 15 ? name : name.substring(0, 15) + '...'
    }
    

    return (
        <TouchableOpacity onPress={() => {navigation.navigate("Detail", {
            char: props.char
        })}} style={styles.viewContainer}>
            <Image style={styles.avatar} source={{ uri: props.char.image }}></Image>
            <View style={styles.infoContainer}>
                <Text style={styles.infoName}>{getTextName(props.char.name)}</Text>
                <View style={styles.containerTextInfo}>
                    <View style={{
                        backgroundColor: returnColorPerson(props.char.status),
                        width: 10,
                        height: 10,
                        borderRadius: 100,
                        marginRight: 8
                    }}
                    ></View>
                    <Text style={styles.statusText}>{props.char.status} - {props.char.species}</Text>
                </View>
                <View style={styles.subInfoContainer}>
                    <Text style={styles.statusText}>Last known location:</Text>
                    <Text style={styles.statusText}>{getTextName(props.char.location.name)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    viewContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(60, 62, 68)',
        margin: 12,
        borderRadius: 12
    },
    avatar: {
        width: 150,
        height: 150,
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12
    },
    infoContainer: {
        marginLeft: 8,
    },
    infoName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerTextInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    statusText: {
        color: 'white',
        fontWeight: '600'
    },
    subInfoContainer: {
        marginTop: 10
    }
});

