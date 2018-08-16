import { FILTER_GNOMES, GET_GNOMES_ERROR, GET_GNOMES_REQUEST, GET_GNOMES_SUCCESS, HIDE_DRAWER, SHOW_DRAWER } from "../constants/constants";
import GnomesDataProvider from "../dataProviders/GnomesDataProvider";
import IDataProvider from "../dataProviders/IDataProvider";
import { IGnomeModel } from "../models/IGnomeModel";

const GetGnomesRequest = () =>({ type:GET_GNOMES_REQUEST});
const GetGnomesSuccess = (
  gnomes: IGnomeModel[], 
  maxAge: number, 
  maxHeight: number, 
  maxWeight: number, 
  gnomesHairColor: string[], 
  gnomesProfessions: string[],
  gnomesNames: string[]
) => ({ type:GET_GNOMES_SUCCESS, gnomes, maxAge, maxHeight, maxWeight, gnomesHairColor, gnomesProfessions, gnomesNames});
const GetGnomesError = (error: string) =>({ type:GET_GNOMES_ERROR, error});
const ShowDrawerAction = () => ({type:SHOW_DRAWER});
const HideDrawerAction = () => ({type:HIDE_DRAWER});
const FilterGnomesAction = (
  gnomeFriends: string[],
  gnomeName: string, 
  gnomeHair: string[], 
  gnomeProfession: string[],
  minAge: number,
  maxAge: number,
  minHeight: number,
  maxHeight: number,
  minWeight: number,
  maxWeight: number
) => ({type:FILTER_GNOMES, gnomeFriends, gnomeName, gnomeHair, gnomeProfession, minAge, maxAge, minHeight, maxHeight, minWeight, maxWeight});

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
      const gnomesHairColor: string[] = [];
      const gnomesProfessions: string[] = [];
      const gnomesNames: string[] = [];
      let maxHeight: number = 0;
      let maxWeight: number = 0;
      let maxAge: number = 0;
      gnomes.forEach(gnome => {
        gnomesNames.push(gnome.name);
        if(gnome.height>maxHeight){ maxHeight=gnome.height;}
        if(gnome.weight>maxWeight){ maxWeight=gnome.weight;}
        if(gnome.age>maxAge){ maxAge=gnome.age;}
        if(gnomesHairColor.indexOf(gnome.hair_color)===-1){
          gnomesHairColor.push(gnome.hair_color);
        }
        gnome.professions.forEach(profession =>{
          if(gnomesProfessions.indexOf(profession)===-1){
            gnomesProfessions.push(profession);
          }
        });
      });
      dispatch(GetGnomesSuccess(gnomes,maxAge,maxHeight,maxWeight,gnomesHairColor,gnomesProfessions, gnomesNames));
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

export function FilterGnomes(
  gnomeFriends: string[],
  gnomeName: string, 
  gnomeHair: string[], 
  gnomeProfession: string[],
  minAge: number,
  maxAge: number,
  minHeight: number,
  maxHeight: number,
  minWeight: number,
  maxWeight: number
){
  return async (dispatch: any) =>{
    dispatch(FilterGnomesAction(gnomeFriends, gnomeName, gnomeHair, gnomeProfession, minAge, maxAge, minHeight, maxHeight, minWeight, maxWeight));
  }
}