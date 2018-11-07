import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import projects from "./projects.json";
import matchitems from "./matchitems.json";
import ScrollToTop from "./components/ScrollToTop";
import AppContainer from "./containers/AppContainer";
import { BrowserRouter} from "react-router-dom";

const initialState = {
  projects: {
    currentFilter: [],
    projects: projects
  },
  match: {
    matchitems: matchitems
  },
  navigation: {
    direction: 'right'
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
