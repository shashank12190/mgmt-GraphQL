const express = require("express");
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const app = express();
connectDB();
const port = process.env.PORT || 5500;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);

app.listen(port, console.log(`Server running on port ${port}`));
