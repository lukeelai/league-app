import { createStore, combineReducers } from "redux";

//Reducers
import account from "../reducers/account";

export default () => {
  const store = createStore(
    combineReducers({ account }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
