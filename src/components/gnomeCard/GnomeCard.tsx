import * as React from 'react';
import GnomeDialog from '../gnomeDialog/GnomeDialog'
import { IGnomeCardProps } from './IGnomeCardProps';
import { IGnomeCardState } from './IGnomeCardState';

export default class GnomeList extends React.Component<IGnomeCardProps, IGnomeCardState> {

    constructor(props: any) {
        super(props);
        
        this.state = {
            dialogOpen: false,
            gnome: props.gnome
        }
    }

    public render() {

        const profileImage = {
            "backgroundImage": "url("+this.state.gnome.thumbnail+")"
        }

        return (
            <div>
                <div className={"gnomeCard"} onClick={this.openDialog}>
                    <div className={"cardThumbnail"} style={profileImage}/>
                    <div className={"cardTextContainer"}>
                        <div className="cardName">{this.state.gnome.name}</div>
                        <div className="cardAge">{"Age: "+this.state.gnome.age+" years"}</div>
                    </div>      
                </div>
                <GnomeDialog closeDialog={this.closeDialog} dialogOpen={this.state.dialogOpen} gnome={this.state.gnome}/>
            </div>
        )
    }

    public componentWillReceiveProps(newProps: any){
        this.setState({gnome: newProps.gnome});
    }

    private openDialog = () =>{
        this.setState({dialogOpen: true})
    }

    private closeDialog = () =>{
        this.setState({dialogOpen: false})
    }

}