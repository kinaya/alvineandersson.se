import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import projects from "./data/projects.json";
import matchitems from "./data/matchitems.json";
import ScrollToTop from "./components/ScrollToTop";
import AppContainer from "./components/AppContainer";
import { BrowserRouter } from "react-router-dom";

const initialState = {
  projects: {
    currentFilter: [],
    projects: projects
  },
  match: {
    matchitems: matchitems
  },
  navigation: {
    animation: 'dont-animate'
  }
}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
