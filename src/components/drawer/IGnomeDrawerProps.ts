export interface IGnomeDrawerProps {
    gnomesHairColor: string[];
    gnomeNames: string[];
    gnomesProfessions: string[];
    isVisible: boolean;
    maxAge: number;
    maxHeight: number;
    maxWeight: number;
    closeDrawer: () => void;
    filterGnomes: (
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
    ) => void;
}