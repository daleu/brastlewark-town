import { FILTER_GNOMES, GET_GNOMES_ERROR, GET_GNOMES_REQUEST, GET_GNOMES_SUCCESS, HIDE_DRAWER, SHOW_DRAWER } from "../constants/constants";
import { IGnomeModel } from "../models/IGnomeModel";

export interface IBrastlewarkState {
    allGnomes: IGnomeModel[];
    error: string;
    gnomes: IGnomeModel[];
    gnomesHairColor: string[];
    gnomesProfessions: string[];
    isBusy: boolean;
    isDrawerVisible: boolean;
    maxAge: number;
    maxHeight: number;
    maxWeight: number;
}

export interface IGetGnomesRequestAction {
    type: 'brastlewark/GET_GNOMES_REQUEST';
}

export interface IGetGnomesSuccessAction {
    type: 'brastlewark/GET_GNOMES_SUCCESS';
    gnomes: IGnomeModel[];
    gnomesHairColor: string[];
    gnomesProfessions: string[];
    maxAge: number;
    maxHeight: number;
    maxWeight: number;
}

export interface IGetGnomesErrorAction {
    type: 'brastlewark/GET_GNOMES_ERROR';
    error: string;
}

export interface IShowDrawer {
    type: 'drawer/SHOW_DRAWER';
}

export interface IHideDrawer {
    type: 'drawer/HIDE_DRAWER';
}

export interface IFilterGnomes {
    type: 'brastlewark/FILTER_GNOMES';
    gnomeName: string;
    gnomeHair: string;
    gnomeProfession: string;
    minAge: number;
    maxAge: number;
    minHeight: number;
    maxHeight: number;
    minWeight: number;
    maxWeight: number;
}

export type IBrastlewarkAction =    IGetGnomesRequestAction | 
                                    IGetGnomesSuccessAction | 
                                    IGetGnomesErrorAction | 
                                    IShowDrawer | 
                                    IHideDrawer |
                                    IFilterGnomes;

export const initialState: IBrastlewarkState = {
    allGnomes: [],
    error: null,
    gnomes: [],
    gnomesHairColor: [],
    gnomesProfessions: [],
    isBusy: false,
    isDrawerVisible: false,
    maxAge: 0,
    maxHeight: 0,
    maxWeight: 0
};

export default (state = initialState, action: IBrastlewarkAction) => {
    switch (action.type) {
        case SHOW_DRAWER:
            return state={
                ...state,
                isDrawerVisible: true
            }
        case HIDE_DRAWER:
            return state={
                ...state,
                isDrawerVisible: false
            }
        case GET_GNOMES_REQUEST:
            return state={
                ...state,
                isBusy: true
            }
        case GET_GNOMES_SUCCESS:
            return state={
                ...state,
                allGnomes: action.gnomes,
                gnomes: action.gnomes,
                gnomesHairColor: action.gnomesHairColor,
                gnomesProfessions: action.gnomesProfessions,
                isBusy: false,
                isDrawerVisible: true,
                maxAge: action.maxAge,
                maxHeight: action.maxHeight,
                maxWeight: action.maxWeight
            }
        case GET_GNOMES_ERROR:
            return state={
                ...state,
                isBusy: false
            }
        case FILTER_GNOMES:
            const gnomesToShow: IGnomeModel[] = [];

            state.allGnomes.forEach(gnome => {

                let name = false;
                let hair = false;
                let profession = false;
                let age = false;
                let height = false;
                let weight = false;

                if((action.gnomeName==null || action.gnomeName==="") 
                || gnome.name.toLowerCase().includes(action.gnomeName.toLowerCase())){
                    name = true;
                }

                if(action.gnomeHair==="" || action.gnomeHair===gnome.hair_color){
                    hair = true;
                }

                if(action.gnomeProfession==="" || gnome.professions.indexOf(action.gnomeProfession)!==-1){
                    profession = true;
                }

                if(gnome.age>=action.minAge && gnome.age<=action.maxAge){
                    age=true;
                }

                if(gnome.height>=action.minHeight && gnome.height<=action.maxHeight){
                    height=true;
                }

                if(gnome.weight>=action.minWeight && gnome.weight<=action.maxWeight){
                    weight=true;
                }

                if(name && hair && profession && age && height && weight){
                    gnomesToShow.push(gnome);
                }
            });

            // Filter by Gnome Hair Color
            // if(action.gnomeHair!==""){
            //     for (let i = gnomesToShow.length - 1; i >= 0; i -= 1) {
            //         if(action.gnomeHair!==gnomesToShow[i].hair_color){
            //             gnomesToShow.splice(i,1);
            //         }
            //     }
            // }

            // Filter by Gnome Profession
            // if(action.gnomeProfession!==""){
            //     for (let i = gnomesToShow.length - 1; i >= 0; i -= 1) {
            //         if(gnomesToShow[i].professions.indexOf(action.gnomeProfession)===-1){
            //             gnomesToShow.splice(i,1);
            //         }
            //     }
            // }


            return state={
                ...state,
                gnomes: gnomesToShow
            }
        default:
            return state;
    }
}