import * as React from 'react';
import { IGnomeModel } from "../../models/IGnomeModel";
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
            <div className={"cardsContainer"}>
                {this.props.gnomes.map((gnome: IGnomeModel, index: number) => {
                    return <div key={index} id={gnome.id.toString()}>{gnome.name}</div>
                })}
            </div>
        )
    }

}