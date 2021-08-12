import express from "express";
import resolver from "./resolvers";
import schema from "./schema";
import {graphqlHTTP} from "express-graphql"

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQl Running");
});

const root = resolver

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(2021, () => console.log("App Running 2021"));
