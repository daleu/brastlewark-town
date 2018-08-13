import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import * as React from 'react';
import { IGnomeDialogProps } from './IGnomeDialogProps';
import { IGnomeDialogState } from './IGnomeDialogState';

export default class GnomeDrawer extends React.Component<IGnomeDialogProps, IGnomeDialogState> {

    constructor(props: any) {
        super(props);
        
        this.state = {
            dialogOpen: props.dialogOpen,
            gnome: props.gnome
        }
    }

    public render(){

        const profileImage = {
            "backgroundImage": "url("+this.state.gnome.thumbnail+")"
        }

        return (
            <Dialog
                open={this.state.dialogOpen}
                onClose={this.props.closeDialog}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle>{this.state.gnome.name}</DialogTitle>
                <DialogContent>
                    <div className={"dialogContent"}>
                        <div className="dialogThumbnail" style={profileImage}/>
                        <div className="dialogTextContainer">
                            <div className="infoTitle">Basic Information</div>
                            <div className="info">{"Name: "+this.state.gnome.name}</div>
                            <div className="info">{"Age: "+this.state.gnome.age+" years"}</div>
                            <br/>
                            <Divider />
                            <div className="infoTitle">Physical Characteristics</div>
                            <div className="info">{"Weight: "+this.state.gnome.weight+" Kg"}</div>
                            <div className="info">{"Height: "+this.state.gnome.height+" cm"}</div>
                            <div className="info">{"Hair Color: "+this.state.gnome.hair_color}</div>
                        </div>
                    </div>
                    <br/>
                    <Divider />
                    <div className="infoTitle">Professions</div>
                    {this.state.gnome.professions.map((profession: string, index: number) =>{
                        return <Chip key={index} label={profession} className={"chipStyle"}/>
                    })}
                    <br/>
                    <Divider />
                    <div className="infoTitle">Friends</div>
                    {this.state.gnome.friends.map((nombre: string, index: number) =>{
                        return <Chip key={index} label={nombre} className={"chipStyle"}/>
                    })}
                    <br/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closeDialog} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    public componentWillReceiveProps(newProps: any){
        this.setState({dialogOpen: newProps.dialogOpen});
    }
}