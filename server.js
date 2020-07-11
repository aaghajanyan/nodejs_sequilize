const config = require("./config/env-settings.json");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(require("./app/routes"));

app.listen(config.node_port, () => {
  console.log("Server listening");
});
