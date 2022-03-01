import React from "react";
// React. js is an open-source JavaScript library
// that is used for building user interfaces
// specifically for single-page applications
import ReactDOM from "react-dom";
// ReactDOM is a package that provides DOM specific methods
// that can be used at the top level of a web app
// to enable an efficient way of managing DOM elements of the web page
// DOM: Document object model
import Provider from "react-redux";
// Redux is a predictable state container for JavaScript apps
// Redux can be used as a data store for any UI layer
import App from "App";
//  App Component is the main component in React which acts as a container for all other components
import {store} from "./store/store";
// The store holds the application state
import "index.scss";
// This is the stylesheet
ReactDOM.render( // controls the contents of the container node you pass in
    <React.StrictMode> // tool for highlighting potential problems in an application
        <Provider store = {store}> // makes the Redux store available to any nested components that need to access the Redux store
            <App/>
        </Provider>
    </React.StrictMode>
);