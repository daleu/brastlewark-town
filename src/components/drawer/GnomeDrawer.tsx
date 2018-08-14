import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import * as React from 'react';
import { IGnomeDrawerProps } from './IGnomeDrawerProps';
import { IGnomeDrawerState } from './IGnomeDrawerState';

export default class GnomeDrawer extends React.Component<IGnomeDrawerProps, IGnomeDrawerState> {

    constructor(props: IGnomeDrawerProps) {
        super(props);
        
        this.state = {
            gnomeHair: '',
            gnomeName: '',
            gnomeProfession: '',
            isVisible: props.isVisible,
            maxAge: this.props.maxAge.toString(),
            maxHeight: this.props.maxHeight.toString(),
            maxWeight: this.props.maxWeight.toString(),
            minAge: '0',
            minHeight: '0',
            minWeight: '0'
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
                <List className={"drawerListFilters"}>
                    <InputLabel>
                        Gnome Name
                    </InputLabel>
                    <TextField
                        fullWidth={true}
                        onChange={this.handleGnomeNameChange}
                        className={"selectStyle"}
                        />
                    <InputLabel>
                        Gnome Hair
                    </InputLabel>
                    <Select
                        value={this.state.gnomeHair}
                        onChange={this.handleHairSelectChange}
                        fullWidth={true}
                        className={"selectStyle"}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.props.gnomesHairColor.map((hair, index) => {
                            return <MenuItem key={index} value={hair}>{hair}</MenuItem>
                        })}
                    </Select>
                    <InputLabel>
                        Gnome Profession
                    </InputLabel>
                    <Select
                        value={this.state.gnomeProfession}
                        onChange={this.handleProfessionSelectChange}
                        fullWidth={true}
                        className={"selectStyle"}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.props.gnomesProfessions.map((hair, index) => {
                            return <MenuItem key={index} value={hair}>{hair}</MenuItem>
                        })}
                    </Select>

                    <Divider className={"selectStyle"}/>
                    <InputLabel>
                        Min Gnome Age
                    </InputLabel>
                    <TextField
                        fullWidth={true}
                        type="number"
                        value={this.state.minAge}
                        InputProps={{ inputProps: { min: 0, max: this.props.maxAge } }}
                        onChange={this.handleGnomeMinAgeChange}
                        className={"selectStyle"}
                        />
                    <InputLabel>
                        Max Gnome Age
                    </InputLabel>
                    <TextField
                        fullWidth={true}
                        type="number"
                        value={this.state.maxAge}
                        InputProps={{ inputProps: { min: 0, max: this.props.maxAge } }}
                        onChange={this.handleGnomeMaxAgeChange}
                        className={"selectStyle"}
                        />

                    <Divider className={"selectStyle"}/>
                    <InputLabel>
                        Min Gnome Height
                    </InputLabel>
                    <TextField
                        fullWidth={true}
                        type="number"
                        value={this.state.minHeight}
                        InputProps={{ inputProps: { min: 0, max: this.props.maxHeight+1 } }}
                        onChange={this.handleGnomeMinHeightChange}
                        className={"selectStyle"}
                        />
                    <InputLabel>
                        Max Gnome Height
                    </InputLabel>
                    <TextField
                        fullWidth={true}
                        type="number"
                        value={this.state.maxHeight}
                        InputProps={{ inputProps: { min: 0, max: this.props.maxHeight+1 } }}
                        onChange={this.handleGnomeMaxHeightChange}
                        className={"selectStyle"}
                        />
                    
                    <Divider className={"selectStyle"}/>
                    <InputLabel>
                        Min Gnome Weight
                    </InputLabel>
                    <TextField
                        fullWidth={true}
                        type="number"
                        value={this.state.minWeight}
                        InputProps={{ inputProps: { min: 0, max: this.props.maxWeight+1 } }}
                        onChange={this.handleGnomeMinWeightChange}
                        className={"selectStyle"}
                        />
                    <InputLabel>
                        Max Gnome Weight
                    </InputLabel>
                    <TextField
                        fullWidth={true}
                        type="number"
                        value={this.state.maxWeight}
                        InputProps={{ inputProps: { min: 0, max: this.props.maxWeight+1 } }}
                        onChange={this.handleGnomeMaxWeightChange}
                        className={"selectStyle"}
                        />
                </List>
                <Button onClick={this.searchGnomes} color="primary">
                    Search
                </Button>
            </Drawer>
        )
    }

    public componentWillReceiveProps(newProps: any){
        this.setState({isVisible: newProps.isVisible});
    }

    private handleGnomeNameChange = (event: any) => {
        this.setState({gnomeName: event.target.value})
    }

    private handleGnomeMinAgeChange = (event: any) => {
        let auxMinAge = event.target.value;
        if(auxMinAge>this.props.maxAge){ auxMinAge = this.props.maxAge}
        if(auxMinAge<0){ auxMinAge = 0}
        this.setState({minAge: auxMinAge});
    }

    private handleGnomeMaxAgeChange = (event: any) => {
        let auxMaxAge = event.target.value;
        if(auxMaxAge>this.props.maxAge){ auxMaxAge = this.props.maxAge}
        if(auxMaxAge<0){ auxMaxAge = 0}
        this.setState({maxAge: auxMaxAge});
    }

    private handleGnomeMinHeightChange = (event: any) => {
        let auxMinHeight = event.target.value;
        if(auxMinHeight>this.props.maxHeight){ auxMinHeight = this.props.maxHeight}
        if(auxMinHeight<0){ auxMinHeight = 0}
        this.setState({minHeight: auxMinHeight});
    }

    private handleGnomeMaxHeightChange = (event: any) => {
        let auxMaxHeight = event.target.value;
        if(auxMaxHeight>this.props.maxHeight){ auxMaxHeight = this.props.maxHeight}
        if(auxMaxHeight<0){ auxMaxHeight = 0}
        this.setState({maxHeight: auxMaxHeight});
    }

    private handleGnomeMinWeightChange = (event: any) => {
        let auxMinWeight = event.target.value;
        if(auxMinWeight>this.props.maxWeight){ auxMinWeight = this.props.maxWeight}
        if(auxMinWeight<0){ auxMinWeight = 0}
        this.setState({minWeight: auxMinWeight});
    }

    private handleGnomeMaxWeightChange = (event: any) => {
        let auxMaxWeight = event.target.value;
        if(auxMaxWeight>this.props.maxWeight){ auxMaxWeight = this.props.maxWeight}
        if(auxMaxWeight<0){ auxMaxWeight = 0}
        this.setState({maxWeight: auxMaxWeight});
    }

    private handleHairSelectChange = (event: any) => {
        this.setState({gnomeHair: event.target.value})
    }

    private handleProfessionSelectChange = (event: any) => {
        this.setState({gnomeProfession: event.target.value})
    }

    private searchGnomes = () => {
        this.props.filterGnomes(
            this.state.gnomeName, 
            this.state.gnomeHair, 
            this.state.gnomeProfession,
            Number(this.state.minAge),
            Number(this.state.maxAge),
            Number(this.state.minHeight),
            Number(this.state.maxHeight),
            Number(this.state.minWeight),
            Number(this.state.maxWeight)
        );
    };

}