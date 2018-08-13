import { IGnomeModel } from "../../models/IGnomeModel";

export interface IGnomeDialogProps {
    gnome: IGnomeModel;
    dialogOpen: boolean;
    closeDialog: () => void;
}