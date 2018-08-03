import * as React from 'react';
import { connect } from 'react-redux';
import { GetGnomes } from '../../actions';
import { IState } from '../../store';
import './App.css';

class App extends React.Component<any, {}> {

  constructor(props: any) {
    super(props);

    this.props.getGnomes();
  }

  public render() {
    return (
        <div>HOLA</div>
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
