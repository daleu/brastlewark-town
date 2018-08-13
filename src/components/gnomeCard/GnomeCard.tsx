import * as React from 'react';
import { IGnomeCardProps } from './IGnomeCardProps';
import { IGnomeCardState } from './IGnomeCardState';

export default class GnomeList extends React.Component<IGnomeCardProps, IGnomeCardState> {

    constructor(props: any) {
        super(props);
        
        this.state = {
            gnome: props.gnome
        }
    }

    public render() {

        const profileImage = {
            "backgroundImage": "url("+this.state.gnome.thumbnail+")"
        }

        return (
            <div className={"gnomeCard"}>
                <div className={"cardThumbnail"} style={profileImage}/>
                <div className={"cardTextContainer"}>
                    <div className="cardName">{this.state.gnome.name}</div>
                    <div className="cardAge">{"Age: "+this.state.gnome.age+" years"}</div>
                </div>      
            </div>
        )
    }

}