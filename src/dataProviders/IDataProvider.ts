import { IGnomeModel } from "../models/IGnomeModel";

interface IDataProvider {
    getGnomes():Promise<IGnomeModel[]>;
}

export default IDataProvider;