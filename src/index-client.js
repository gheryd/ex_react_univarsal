import React from 'react';
import {render} from 'react-dom';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

alert("start rendering from client");
const message = __message__+" ... from client (browser)";
render(
    <BrowserRouter>
        <App message={message}/>
    </BrowserRouter>
    , document.getElementById('react-container'));