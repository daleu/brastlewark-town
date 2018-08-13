import * as React from 'react';
import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { GetGnomes } from '../../actions';
import { IState } from '../../store';
import GnomeList from '../gnomeList/GnomeList';
import './App.css';

class App extends React.Component<any, {}> {

  constructor(props: any) {
    super(props);
    this.props.getGnomes();
  }

  public render() {
    return (
      <div>
        {!this.props.isBusy ?
          <GnomeList gnomes={this.props.gnomes}/>
          : null
        }
      </div>
    );
  }
}

interface IDispatch{
  getGnomes:() => void;
}

const mapStateToProps = (state: IState) => ({
  error: state.brastlewark.error,
  gnomes: state.brastlewark.gnomes,
  isBusy: state.brastlewark.isBusy
});

const mapDispatchToProps = (dispatch: any):IDispatch => {
  return{
    getGnomes:()=>{
      return dispatch(GetGnomes());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
