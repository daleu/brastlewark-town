import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { connect } from 'react-redux';
import { FilterGnomes, GetGnomes, HideDrawer, ShowDrawer } from '../../actions';
import { IState } from '../../store';
import GnomeDrawer from '../drawer/GnomeDrawer';
import GnomeList from '../gnomeList/GnomeList';
import './App.css';

class App extends React.Component<any, {}> {

  constructor(props: any) {
    super(props);
    this.props.getGnomes();
  }

  public render() {

    const appBarShiftLeft = {
      marginLeft: "240px",
      width: "calc(100% - 240px)"
    }

    const shiftLeft = {
      marginLeft: "240px"
    }

    return (
      <div>
        {!this.props.isBusy ?
          <div className={"appFrame"}>
            <AppBar position="static" style={this.props.isDrawerVisible ? appBarShiftLeft : null}>
              <Toolbar>
                {!this.props.isDrawerVisible ?
                  <IconButton 
                    color="inherit" 
                    aria-label="Menu"
                    onClick={this.handleDrawerOpen}>
                    <MenuIcon />
                  </IconButton>
                  : null
                }
                <Typography variant="title" color="inherit">
                  Gnomes
                </Typography>
              </Toolbar>
            </AppBar>
            <GnomeDrawer 
              gnomesHairColor={this.props.gnomesHairColor}
              gnomeNames={this.props.gnomesNames}
              gnomesProfessions={this.props.gnomesProfessions}
              isVisible={this.props.isDrawerVisible} 
              maxAge={this.props.maxAge}
              maxHeight={this.props.maxHeight}
              maxWeight={this.props.maxWeight}
              closeDrawer={this.handleDrawerClose} 
              filterGnomes={this.filterGnomes}

              />
            <div style={this.props.isDrawerVisible ? shiftLeft : null}>
              {console.log(this.props.gnomes)}
              <GnomeList gnomes={this.props.gnomes}/>
            </div>
          </div>
          : null
        }
      </div>
    );
  }

  private handleDrawerOpen = () => {
    this.props.showDrawer();
  }

  private handleDrawerClose = () => {
    this.props.hideDrawer();
  }

  private filterGnomes = (
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
  ) => {
    this.props.filterGnomes(gnomeFriends, gnomeName, gnomeHair, gnomeProfession, minAge, maxAge, minHeight, maxHeight, minWeight, maxWeight);
  }
}


interface IDispatch{
  filterGnomes:(
    gnomeFriends: string[],
    gnomeName:string, 
    gnomeHair: string[], 
    gnomeProfession: string[],
    minAge: number,
    maxAge: number,
    minHeight: number,
    maxHeight: number,
    minWeight: number,
    maxWeight: number
  ) => void;
  getGnomes:() => void;
  hideDrawer:() => void;
  showDrawer:() => void;
}

const mapStateToProps = (state: IState) => ({
  error: state.brastlewark.error,
  gnomes: state.brastlewark.gnomes,
  gnomesHairColor: state.brastlewark.gnomesHairColor,
  gnomesNames: state.brastlewark.gnomesNames,
  gnomesProfessions: state.brastlewark.gnomesProfessions,
  isBusy: state.brastlewark.isBusy,
  isDrawerVisible: state.brastlewark.isDrawerVisible,
  maxAge: state.brastlewark.maxAge,
  maxHeight: state.brastlewark.maxHeight,
  maxWeight: state.brastlewark.maxWeight
});

const mapDispatchToProps = (dispatch: any):IDispatch => {
  return{
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
    ) =>{
      return dispatch(FilterGnomes(gnomeFriends, gnomeName, gnomeHair, gnomeProfession, minAge, maxAge, minHeight, maxHeight, minWeight, maxWeight))
    },
    getGnomes:()=>{
      return dispatch(GetGnomes());
    },
    hideDrawer:()=>{
      return dispatch(HideDrawer());
    },
    showDrawer:()=>{
      return dispatch(ShowDrawer());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
