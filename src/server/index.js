import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";

import App from "../client/App";

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use("/", (_, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <main id="app">${renderToString(<App />)}</main>
        <script src="/app.js" charset="utf-8"></script>
        <script src="/vendor.js" charset="utf-8"></script>
      </body>
    </html>
  `);
});

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
