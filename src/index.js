import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
//import projects from "./data/projects.json";
//import matchitems from "./data/matchitems.json";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
//import regeneratorRuntime from "regenerator-runtime";

/*const initialState = {
  projects: {
    currentFilter: [],
    projects: projects
  },
  match: {
    matchitems: matchitems
  },
  animation: {
    projects: true
  },
}*/

//const store = configureStore(initialState)

const store = configureStore()

//const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
