import express from "express";
import router from "./router";

// initialize server

const app = express();
const port = process.env.PORT || 6200;
// app root api
const baseUrl = `/api`;

// use express routers for api

app.use(baseUrl, router);

app.listen(port, () => console.log(`listening on port ${port}`));
