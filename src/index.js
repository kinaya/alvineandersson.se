import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import projects from "./projects.json";
import matchitems from "./matchitems.json";
import ScrollToTop from "./components/ScrollToTop";
import AppContainer from "./containers/AppContainer";
//import { BrowserRouter} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//import createHistory from 'history/createBrowserHistory';
//import createMemoryHistory from 'history/createBrowserHistory';
import createHistory from 'history/createMemoryHistory';

const initialState = {
  projects: {
    currentFilter: [],
    projects: projects
  },
  match: {
    matchitems: matchitems
  },
  navigation: {
    direction: 'left',
    prevPathKey: null,
    animation: 'dont-animate'
  }
}

const store = configureStore(initialState)

//const history = createHistory();
const history = createHistory();

//  <BrowserRouter history={history}>

ReactDOM.render(

  <Provider store={store}>
  <BrowserRouter history={history}>
    <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
