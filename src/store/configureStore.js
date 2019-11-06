import { createStore, combineReducers } from "redux";

//Reducers
import account from "../reducers/account";
import tab from "../reducers/tab";

export default () => {
  const store = createStore(
    combineReducers({ account, tab }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
