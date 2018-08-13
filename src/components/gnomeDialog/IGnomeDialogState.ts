import { IGnomeModel } from "../../models/IGnomeModel";

export interface IGnomeDialogState {
    dialogOpen: boolean;
    gnome: IGnomeModel;
}