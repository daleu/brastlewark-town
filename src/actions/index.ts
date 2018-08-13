import { GET_GNOMES_ERROR, GET_GNOMES_REQUEST, GET_GNOMES_SUCCESS, HIDE_DRAWER, SHOW_DRAWER } from "../constants/constants";
import GnomesDataProvider from "../dataProviders/GnomesDataProvider";
import IDataProvider from "../dataProviders/IDataProvider";
import { IGnomeModel } from "../models/IGnomeModel";

const GetGnomesRequest = () =>({ type:GET_GNOMES_REQUEST});
const GetGnomesSuccess = (gnomes: IGnomeModel[]) =>({ type:GET_GNOMES_SUCCESS, gnomes});
const GetGnomesError = (error: string) =>({ type:GET_GNOMES_ERROR, error});
const ShowDrawerAction = () => ({type:SHOW_DRAWER});
const HideDrawerAction = () => ({type:HIDE_DRAWER});

export function GetGnomes() {
  return async (dispatch: any) =>{
    dispatch(GetGnomesRequest());

    // ON THIS CASE THERE IS NO DIFERENCE, BUT IN A REAL PROJECT IS A THINK TO TAKE CARE
    let service: IDataProvider;
    if(process.env.NODE_ENV==="production"){
      service = new GnomesDataProvider();
    } 
    else {
      service = new GnomesDataProvider();
    }   

    service.getGnomes()
    .then((gnomes: IGnomeModel[]) =>{
      dispatch(GetGnomesSuccess(gnomes));
    })
    .catch((error: string)=>{
      dispatch(GetGnomesError(error));
    });
  }
}

export function ShowDrawer(){
  return async (dispatch: any) =>{
    dispatch(ShowDrawerAction());
  }
}

export function HideDrawer(){
  return async (dispatch: any) =>{
    dispatch(HideDrawerAction());
  }
}