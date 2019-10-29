const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./typeDefs/Book");
const resolvers = require("./resolvers/bookResolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
