const { gql } = require("apollo-server");
const BookTypedefs = gql`
  type Book {
    title: String
    description: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String, description: String, author: String): [Book]
  }
`;

module.exports = BookTypedefs;
