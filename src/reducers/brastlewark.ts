import { GET_GNOMES_ERROR, GET_GNOMES_REQUEST, GET_GNOMES_SUCCESS } from "../constants/constants";
import { IGnomeModel } from "../models/IGnomeModel";

export interface IBrastlewarkState {
    error: string;
    gnomes: IGnomeModel[];
    isBusy: boolean;
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

export type IBrastlewarkAction = IGetGnomesRequestAction | IGetGnomesSuccessAction | IGetGnomesErrorAction;

export const initialState: IBrastlewarkState = {
    error: null,
    gnomes: [],
    isBusy: false
};

export default (state = initialState, action: IBrastlewarkAction) => {
    switch (action.type) {
        case GET_GNOMES_REQUEST:
            return state={
                ...state,
                isBusy: true
            }
        case GET_GNOMES_SUCCESS:
            return state={
                ...state,
                gnomes: action.gnomes,
                isBusy: false
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