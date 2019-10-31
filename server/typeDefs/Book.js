const { gql } = require("apollo-server");
const BookTypedefs = gql`
  type Book {
    id: ID
    title: String
    description: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String, description: String, author: String): [Book]
    updateBook(
      id: Int
      title: String
      author: String
      description: String
    ): [Book]
    deleteBook(id: Int): [Book]
  }
`;

module.exports = BookTypedefs;
