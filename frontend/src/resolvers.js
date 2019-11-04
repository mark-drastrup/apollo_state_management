import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    books: [Book]
    showForm: Boolean
  }

  extend type Mutation {
    createBook(title: String, author: String, description: String): [Book]
  }
`;

export const resolvers = {};
