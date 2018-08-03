import { combineReducers, Reducer } from 'redux'
import brastlewarkReducer, { IBrastlewarkState } from './brastlewark';

export interface IState {
    brastlewark: IBrastlewarkState;
}

export const rootReducer: Reducer<IState> = combineReducers<IState>({
    brastlewark: brastlewarkReducer
})