const express = require("express");
const env = require("./dotenv");
const { initDb } = require("./Connection/init_connection");

const insertTo = require("./storetodos");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const typeDefinitions = require("./src/users/typedefs");
const {
  getAllTodos,
  getAllTodoById,
  getAllUsers,
  getTodoByUserId,
  getTdodoCount,
  getTodoCount,
} = require("./src/users/controller");

let app = express();

app.use(bodyParser.json());
app.use(cors());
initDb();

async function initAppoloServer() {
  // The GraphQL schema
  const typeDefs = `#graphql
    ${typeDefinitions} `;

  // A map of functions which return data for the schema.

  const resolvers = {
    Query: {
      getTodo: async (root, limit) => await getAllTodos(limit),
      getTodoById: async (root, id) => await getAllTodoById(id),
      getTodoByUserId: async (root, id) => await getTodoByUserId(id),
      getAllUsers: async () => await getAllUsers(),
      count: async (_, data) => await getTodoCount(),
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));
  //   const { url } = await startStandaloneServer(server);

  app.listen(env.PORT, () => {
    console.log(`server started at ${env.PORT} `);
  });
}

app.get("/store-todo", (req, res) => {
  // insertTo();
  // insertTo.insertUsers();
  // insertTo.updateDisc();
  res.send("sent");
});

initAppoloServer();
