import { GET_GNOMES_ERROR, GET_GNOMES_REQUEST, GET_GNOMES_SUCCESS, HIDE_DRAWER, SHOW_DRAWER } from "../constants/constants";
import { IGnomeModel } from "../models/IGnomeModel";

export interface IBrastlewarkState {
    error: string;
    gnomes: IGnomeModel[];
    isBusy: boolean;
    isDrawerVisible: boolean;
}

export interface IGetGnomesRequestAction {
    type: 'brastlewark/GET_GNOMES_REQUEST';
}

export interface IGetGnomesSuccessAction {
    type: 'brastlewark/GET_GNOMES_SUCCESS';
    gnomes: IGnomeModel[];
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

export type IBrastlewarkAction = IGetGnomesRequestAction | IGetGnomesSuccessAction | IGetGnomesErrorAction | IShowDrawer | IHideDrawer;

export const initialState: IBrastlewarkState = {
    error: null,
    gnomes: [],
    isBusy: false,
    isDrawerVisible: false
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
                gnomes: action.gnomes,
                isBusy: false,
                isDrawerVisible: true
            }
        case GET_GNOMES_ERROR:
            return state={
                ...state,
                isBusy: false
            }
        default:
            return state;
    }
}