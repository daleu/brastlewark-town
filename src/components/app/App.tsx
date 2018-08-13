import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { connect } from 'react-redux';
import { GetGnomes, HideDrawer, ShowDrawer } from '../../actions';
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
                <IconButton 
                  color="inherit" 
                  aria-label="Menu"
                  onClick={this.handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  Gnomes
                </Typography>
              </Toolbar>
            </AppBar>
            <GnomeDrawer isVisible={this.props.isDrawerVisible} closeDrawer={this.handleDrawerClose}/>
            <div style={this.props.isDrawerVisible ? shiftLeft : null}>
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

}


interface IDispatch{
  getGnomes:() => void;
  hideDrawer:() => void;
  showDrawer:() => void;
}

const mapStateToProps = (state: IState) => ({
  error: state.brastlewark.error,
  gnomes: state.brastlewark.gnomes,
  isBusy: state.brastlewark.isBusy,
  isDrawerVisible: state.brastlewark.isDrawerVisible
});

const mapDispatchToProps = (dispatch: any):IDispatch => {
  return{
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
