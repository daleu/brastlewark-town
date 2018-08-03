import { GET_GNOMES_REQUEST } from "../constants/constants";
import GnomesDataProvider from "../dataProviders/GnomesDataProvider";
import IDataProvider from "../dataProviders/IDataProvider";
import { IGnomeModel } from "../models/IGnomeModel";

const GetGnomesRequest = () =>({ type:GET_GNOMES_REQUEST});
const GetGnomesSuccess = (gnomes: IGnomeModel[]) =>({ type:GET_GNOMES_REQUEST, gnomes});
const GetGnomesError = (error: string) =>({ type:GET_GNOMES_REQUEST, error});

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