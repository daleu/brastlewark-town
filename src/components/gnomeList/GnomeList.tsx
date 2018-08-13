import * as React from 'react';
import { IGnomeModel } from "../../models/IGnomeModel";
import GnomeCard from '../gnomeCard/GnomeCard';
import { IGnomeListProps } from './IGnomeListProps';
import { IGnomeListState } from './IGnomeListState';

export default class GnomeList extends React.Component<IGnomeListProps, IGnomeListState> {

    constructor(props: any) {
        super(props);
        
        this.state = {
            gnomes: props.gnomes
        }
    }

    public render() {
        return (
            <div>
                <div className={"cardsContainer"}>
                    {this.state.gnomes.map((gnome: IGnomeModel, index: number) => {
                        return <GnomeCard key={index} gnome={gnome}/>
                    })}
                </div>
            </div>
        )
    }

}