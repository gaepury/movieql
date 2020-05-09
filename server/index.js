import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql_practice/resolvers";

const server = new GraphQLServer({
  typeDefs: "server/graphql_practice/schema.graphql",
  resolvers
});

server.start(() => console.log("GraphQL Server Running"));
