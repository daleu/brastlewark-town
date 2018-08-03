import { applyMiddleware, compose, createStore as reduxCreateStore, Store } from 'redux';
import { createLogger }from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { IState, rootReducer } from '../reducers';

export { IState } from '../reducers';

export function createStore(initialState?: IState): Store<IState> {
    const loggerMiddleware = createLogger();
  
    const middlewares = [
      // add additional middleware like redux-thunk here
      thunkMiddleware,
      loggerMiddleware
    ];
  
    const store = reduxCreateStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
  
    return {
      ...store
    }
  }