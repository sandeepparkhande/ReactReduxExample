import { msgReducer } from "./msgReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

//store = createStore(msgReducer);

///store.dispatch({ type: "ADD_MESSAGE", payload: " msg added" });
const store = createStore(
  msgReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;
//store.dispatch({ type: "ADD_MESSAGE", payload: " msg added" });
