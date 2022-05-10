import { Character } from "./character.model";

export interface Params {
    char?: Character; 
}

export interface Route {
    key: string;
    name: string;
    params: Params;
    path: any;
}

