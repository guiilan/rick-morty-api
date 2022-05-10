import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 
import { Character } from "../../models/character.model";

export type propsNavigationStack = {
    Home: undefined
    Detail: {
        char: Character
    }
} 

export type propsStack = NativeStackNavigationProp<propsNavigationStack>