import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import projects from "./projects.json";
import matchitems from "./matchitems.json";

const initialState = {
  projects: {
    currentFilter: [],
    projects: projects
  },
  match: {
    matchitems: matchitems
  }
}

const store = configureStore(initialState)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
