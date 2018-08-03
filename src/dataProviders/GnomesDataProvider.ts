import { IGnomeModel } from "../models/IGnomeModel";
import IDataProvider from "./IDataProvider";

export default class GnomesDataProvider implements IDataProvider {

    public getGnomes():Promise<IGnomeModel[]>{
        return new Promise<IGnomeModel[]>((resolve,reject) =>{
            resolve();
        })
    }

}