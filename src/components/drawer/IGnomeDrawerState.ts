import {IPersonaProps} from 'office-ui-fabric-react/lib/Persona';

export interface IGnomeDrawerState {
    gnomeFriends: IPersonaProps[];
    gnomeHair: string[];
    gnomeName: string;
    gnomeProfession: string[];
    isVisible: boolean;
    maxAge: string;
    maxHeight: string;
    maxWeight: string;
    minAge: string;
    minHeight: string;
    minWeight: string;
}