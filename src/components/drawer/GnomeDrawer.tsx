import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import * as React from 'react';
import { IGnomeDrawerProps } from './IGnomeDrawerProps';
import { IGnomeDrawerState } from './IGnomeDrawerState';

export default class GnomeDrawer extends React.Component<IGnomeDrawerProps, IGnomeDrawerState> {

    constructor(props: IGnomeDrawerProps) {
        super(props);
        
        this.state = {
            isVisible: props.isVisible
        }
    }

    public render(){
        return (
            <Drawer
                variant="persistent"
                anchor={"left"}
                open={this.state.isVisible}
                classes={{
                paper: "drawerPaper",
                }}
            >
                <div className={"drawerHeader"}>
                    <IconButton onClick={this.props.closeDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List/>
            </Drawer>
        )
    }

    public componentWillReceiveProps(newProps: any){
        this.setState({isVisible: newProps.isVisible});
    }

}