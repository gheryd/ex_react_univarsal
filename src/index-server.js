import express from 'express';
import path from 'path';
import {renderToString} from 'react-dom/server';
import React from 'react';
import App from './components/App';
import {StaticRouter} from "react-router-dom";
import getHtml from "./html";

const fileAssets = express.static(
    path.join(__dirname, '../dist/assets')
);

const logger = (req, res, next)=> {
    console.log(`${req.method} request for '${req.url}'`);
    next();
}

const app = express();
app.use(logger)
app.use(fileAssets);

app.use("/",(req, res)=>{
    const d = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const message = `${d}: message from server `;
    const content = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App message={message}/>
        </StaticRouter>
    );
    res.send( getHtml(message, content) );
});


app.listen(3000,()=>console.log("listening 3000..."));