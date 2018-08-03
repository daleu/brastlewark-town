import { IGnomeModel } from "../models/IGnomeModel";
import { GET_GNOMES_REQUEST, GET_GNOMES_SUCCESS, GET_GNOMES_ERROR } from "../constants/constants";

export interface IBrastlewarkState {
    error: string;
    gnomes: IGnomeModel[];
    isBusy: boolean;
}

export interface IGetGnomesRequestAction {
    action: 'brastlewark/GET_GNOMES_REQUEST';
}

export interface IGetGnomesSuccessAction {
    action: 'brastlewark/GET_GNOMES_SUCCESS';
}

export interface IGetGnomesErrorAction {
    action: 'brastlewark/GET_GNOMES_ERROR';
}

export type IBrastlewarkAction = IGetGnomesRequestAction | IGetGnomesSuccessAction | IGetGnomesErrorAction;

export const initialState: IBrastlewarkState = {
    error: null,
    gnomes: [],
    isBusy: false
};

export default (state = initialState, action: IBrastlewarkAction) => {
    switch (action.action) {
        case GET_GNOMES_REQUEST:
            return state={
                ...state,
                isBusy: true
            }
        case GET_GNOMES_SUCCESS:
            return state={
                ...state,
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