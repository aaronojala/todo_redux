import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore} from "redux";
import App from './App'
import rootReducer from './reducers';
import Results from './Containers/Results';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
      <Results />
    </Provider>,
    document.getElementById("root")
  );
