import { GraphQLServer } from "graphql-yoga";

console.log('aa3')

const server = new GraphQLServer({

});

server.start(() => console.log("GraphQL Server Running"));
