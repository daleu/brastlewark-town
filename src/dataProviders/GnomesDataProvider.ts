import * as $ from 'jquery';
import { IGnomeModel } from "../models/IGnomeModel";
import IDataProvider from "./IDataProvider";

export default class GnomesDataProvider implements IDataProvider {

    public getGnomes():Promise<IGnomeModel[]>{
        return new Promise<IGnomeModel[]>((resolve,reject) =>{
            $.ajax({
                type: "GET",
                url: "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json",
                success(result){
                    resolve($.parseJSON(result)["Brastlewark"]);
                },
                error(error){
                    reject(error)
                }
            });
        });
    }

}