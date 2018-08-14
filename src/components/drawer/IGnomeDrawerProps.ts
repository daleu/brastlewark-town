export interface IGnomeDrawerProps {
    gnomesHairColor: string[];
    gnomesProfessions: string[];
    isVisible: boolean;
    maxAge: number;
    maxHeight: number;
    maxWeight: number;
    closeDrawer: () => void;
    filterGnomes: (
        gnomeName: string,
        gnomeHair: string, 
        gnomeProfession: string,
        minAge: number,
        maxAge: number,
        minHeight: number,
        maxHeight: number,
        minWeight: number,
        maxWeight: number
    ) => void;
}