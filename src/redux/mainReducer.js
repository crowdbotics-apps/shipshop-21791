import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn25153675Reducer from '../features/SignIn25153675/redux/reducers'
import Dashboard17153673Reducer from '../features/Dashboard17153673/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn25153675: SignIn25153675Reducer,
Dashboard17153673: Dashboard17153673Reducer,

});