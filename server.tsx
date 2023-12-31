import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <body>
    <div id="root">${renderToString(<App initialPath={req.path} />)}</div>
    <script src="/client.js"></script>
  </body></html>
  `);
});

app.listen(3000, () => console.log("listening on port 3000"));
