import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const initialState = {
  list: {
    A: [{lastName:'---'}],
    B: [{lastName:'---'}],
    C: [{lastName:'---'}],
    D: [{lastName:'---'}],
    E: [{lastName:'---'}],
    F: [{lastName:'---'}],
    G: [{lastName:'---'}],
    H: [{lastName:'---'}],
    I: [{lastName:'---'}],
    J: [{lastName:'---'}],
    K: [{lastName:'---'}],
    L: [{lastName:'---'}],
    M: [{lastName:'---'}],
    N: [{lastName:'---'}],
    O: [{lastName:'---'}],
    P: [{lastName:'---'}],
    R: [{lastName:'---'}],
    S: [{lastName:'---'}],
    T: [{lastName:'---'}],
    U: [{lastName:'---'}],
    V: [{lastName:'---'}],
    W: [{lastName:'---'}],
    X: [{lastName:'---'}],
    Y: [{lastName:'---'}],
    Z: [{lastName:'---'}],
  },
};

export const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
